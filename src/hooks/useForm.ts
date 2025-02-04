import { useState, useCallback, useMemo } from 'react';
import { z } from 'zod';
import type { FormState, FormValues, FormErrors } from '../types/form';

interface UseFormProps<T extends FormValues> {
  initialValues: T;
  validationSchema?: z.ZodType<T>;
  onSubmit: (values: T) => Promise<void>;
}

export function useForm<T extends FormValues>({
  initialValues,
  validationSchema,
  onSubmit
}: UseFormProps<T>) {
  // フォームの状態管理
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [state, setState] = useState<FormState>({
    status: 'idle',
    touched: {},
    dirty: false
  });

  // フォームの値を更新
  const setFieldValue = useCallback((name: keyof T, value: unknown) => {
    setValues(prev => ({ ...prev, [name]: value }));
    setState(prev => ({ ...prev, dirty: true }));
  }, []);

  // フィールドのタッチ状態を更新
  const setFieldTouched = useCallback((name: keyof T, isTouched = true) => {
    setTouched(prev => ({ ...prev, [name]: isTouched }));
    setState(prev => ({
      ...prev,
      touched: { ...prev.touched, [name]: isTouched }
    }));
  }, []);

  // フォームの検証
  const validate = useCallback(async (): Promise<boolean> => {
    if (!validationSchema) return true;

    try {
      await validationSchema.parseAsync(values);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: FormErrors = {};
        for (const err of error.errors) {
          if (err.path.length > 0) {
            newErrors[err.path.join('.')] = [err.message];
          }
        }
        setErrors(newErrors);
      }
      return false;
    }
  }, [values, validationSchema]);

  // フォームの送信
  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    setState(prev => ({ ...prev, status: 'loading' }));
    
    try {
      const isValid = await validate();
      if (!isValid) {
        setState(prev => ({ ...prev, status: 'error' }));
        return;
      }

      await onSubmit(values);
      setState(prev => ({ ...prev, status: 'success' }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        status: 'error',
        error: error instanceof Error ? error.message : '送信中にエラーが発生しました'
      }));
    }
  }, [values, validate, onSubmit]);

  // フォームのリセット
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setState({
      status: 'idle',
      touched: {},
      dirty: false
    });
  }, [initialValues]);

  // フィールドのプロパティを生成
  const getFieldProps = useCallback((name: keyof T) => ({
    name,
    value: values[name],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFieldValue(name, e.target.value);
    },
    onBlur: () => setFieldTouched(name),
    error: errors[name as string]?.[0],
    touched: touched[name as string]
  }), [values, errors, touched, setFieldValue, setFieldTouched]);

  // メモ化された値を返す
  return useMemo(
    () => ({
      values,
      errors,
      touched,
      state,
      setFieldValue,
      setFieldTouched,
      handleSubmit,
      resetForm,
      getFieldProps
    }),
    [
      values,
      errors,
      touched,
      state,
      setFieldValue,
      setFieldTouched,
      handleSubmit,
      resetForm,
      getFieldProps
    ]
  );
}