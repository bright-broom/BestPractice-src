import { useCallback, useState, useEffect } from 'react';
import { z } from 'zod';
import type { FormValues } from '../types/form';

export interface UseFieldProps<T extends FormValues, K extends keyof T> {
  name: K;
  value: T[K];
  onChange: (value: T[K]) => void;
  onBlur: () => void;
  validation?: z.ZodType<T[K]>;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
}

interface FieldState {
  touched: boolean;
  error?: string;
  isDirty: boolean;
}

type FieldInputElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export interface UseFieldReturn<T extends FormValues, K extends keyof T> {
  field: {
    id: string;
    name: K;
    value: T[K];
    onChange: (event: React.ChangeEvent<FieldInputElement>) => void;
    onBlur: () => void;
    'aria-invalid': boolean;
    'aria-describedby'?: string;
  };
  meta: {
    touched: boolean;
    error?: string;
    isDirty: boolean;
  };
  helpers: {
    setValue: (value: T[K]) => void;
    setTouched: (touched: boolean) => void;
    validate: () => Promise<void>;
  };
}

export function useField<T extends FormValues, K extends keyof T>({
  name,
  value,
  onChange,
  onBlur,
  validation,
  validateOnChange = false,
  validateOnBlur = true,
}: UseFieldProps<T, K>): UseFieldReturn<T, K> {
  // フィールドの状態
  const [state, setState] = useState<FieldState>({
    touched: false,
    isDirty: false,
  });

  // 値の検証
  const validate = useCallback(async () => {
    if (!validation) return;

    try {
      await validation.parseAsync(value);
      setState(prev => ({ ...prev, error: undefined }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setState(prev => ({ ...prev, error: error.errors[0]?.message }));
      }
    }
  }, [validation, value]);

  // 値の変更ハンドラ
  const handleChange = useCallback(
    (event: React.ChangeEvent<FieldInputElement>) => {
      const newValue = event.target.value as T[K];
      onChange(newValue);
      setState(prev => ({ ...prev, isDirty: true }));
      
      if (validateOnChange) {
        validate();
      }
    },
    [onChange, validateOnChange, validate]
  );

  // フォーカス喪失ハンドラ
  const handleBlur = useCallback(() => {
    onBlur();
    setState(prev => ({ ...prev, touched: true }));
    
    if (validateOnBlur) {
      validate();
    }
  }, [onBlur, validateOnBlur, validate]);

  // 検証の副作用
  useEffect(() => {
    if (state.touched && validateOnChange && validation) {
      validate();
    }
  }, [state.touched, validateOnChange, validation, validate]);

  // フィールドID
  const fieldId = `field-${String(name)}`;
  const errorId = `${fieldId}-error`;

  return {
    field: {
      id: fieldId,
      name,
      value,
      onChange: handleChange,
      onBlur: handleBlur,
      'aria-invalid': !!state.error,
      'aria-describedby': state.error ? errorId : undefined,
    },
    meta: {
      touched: state.touched,
      error: state.error,
      isDirty: state.isDirty,
    },
    helpers: {
      setValue: onChange,
      setTouched: (touched: boolean) => {
        setState(prev => ({ ...prev, touched }));
      },
      validate,
    },
  };
}

// フィールド値の型ガード
export function isFieldValue<T>(value: unknown): value is T {
  return value !== undefined && value !== null;
}