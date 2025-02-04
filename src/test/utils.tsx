import * as React from 'react';
import { render as rtlRender } from '@testing-library/react';
import type {
  RenderResult,
  RenderOptions as RTLRenderOptions,
  queries,
  Queries,
} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import type { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import '@testing-library/jest-dom';

interface RenderOptions extends Omit<RTLRenderOptions, 'queries'> {
  wrapper?: React.ComponentType<{ children: React.ReactNode }>;
}

interface CustomRenderResult extends RenderResult {
  user: UserEvent;
}

/**
 * カスタムレンダー関数
 */
function render(
  ui: React.ReactElement,
  options: RenderOptions = {}
): CustomRenderResult {
  const { wrapper: Wrapper = React.Fragment, ...rest } = options;
  const rendered = rtlRender(ui, {
    wrapper: ({ children }) => <Wrapper>{children}</Wrapper>,
    ...rest,
  }) as RenderResult;

  return {
    ...rendered,
    user: userEvent.setup(),
  };
}

/**
 * フォームのテストヘルパー
 */
const formUtils = {
  /**
   * フォームに値を入力
   */
  async fillForm(user: UserEvent, fields: Record<string, string>): Promise<void> {
    for (const [name, value] of Object.entries(fields)) {
      const input = document.querySelector(`[name="${name}"]`) as HTMLElement;
      if (input) {
        await user.type(input, value);
      }
    }
  },

  /**
   * フォームの送信をシミュレート
   */
  async submitForm(user: UserEvent, submitButton: HTMLElement): Promise<void> {
    await user.click(submitButton);
  },

  /**
   * エラーメッセージの検証
   */
  getErrorMessage(name: string): string | undefined {
    return document.querySelector(`[id="${name}-error"]`)?.textContent ?? undefined;
  },
};

/**
 * アクセシビリティのテストヘルパー
 */
const a11yUtils = {
  /**
   * フォーカス可能な要素の取得
   */
  getFocusableElements(): NodeListOf<HTMLElement> {
    return document.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
  },

  /**
   * キーボードナビゲーションのテスト
   */
  async testKeyboardNavigation(user: UserEvent): Promise<void> {
    const elements = this.getFocusableElements();
    for (const element of Array.from(elements)) {
      await user.tab();
      expect(document.activeElement).toBe(element);
    }
  },
};

class MockResponse<T> extends Response {
  constructor(body: T) {
    super(JSON.stringify(body), {
      status: 200,
      statusText: 'OK',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  override json(): Promise<T> {
    return Promise.resolve(JSON.parse(this.body as unknown as string) as T);
  }
}

/**
 * モックヘルパー
 */
const mockUtils = {
  /**
   * コンソールメソッドのモック
   */
  mockConsole(): void {
    const original = { ...console };
    beforeAll(() => {
      console.log = jest.fn();
      console.error = jest.fn();
      console.warn = jest.fn();
    });
    afterAll(() => {
      console.log = original.log;
      console.error = original.error;
      console.warn = original.warn;
    });
  },

  /**
   * フェッチのモック
   */
  mockFetch<T>(response: T): jest.SpyInstance {
    return jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve(new MockResponse(response))
    );
  },
};

interface ButtonValidationOptions {
  disabled?: boolean;
  loading?: boolean;
}

/**
 * アサーションヘルパー
 */
const assertUtils = {
  /**
   * フォームフィールドの検証
   */
  validateFormField(name: string, value: string, error?: string): void {
    const input = document.querySelector(`[name="${name}"]`) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe(value);
    if (error) {
      expect(formUtils.getErrorMessage(name)).toBe(error);
    }
  },

  /**
   * ボタンの状態検証
   */
  validateButton(
    button: HTMLElement,
    { disabled = false, loading = false }: ButtonValidationOptions = {}
  ): void {
    expect(button).toBeInTheDocument();
    if (disabled) {
      expect(button).toBeDisabled();
    } else {
      expect(button).toBeEnabled();
    }
    if (loading) {
      expect(button).toHaveAttribute('aria-busy', 'true');
    }
  },
};

export { render, formUtils, a11yUtils, mockUtils, assertUtils };
export type { CustomRenderResult, RenderOptions, ButtonValidationOptions };