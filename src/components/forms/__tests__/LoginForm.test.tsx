import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from '../examples/LoginForm';

describe('LoginForm', () => {
  const mockSubmit = jest.fn();

  beforeEach(() => {
    mockSubmit.mockClear();
  });

  it('フォームが正しくレンダリングされる', () => {
    render(<LoginForm />);

    // フォーム要素の存在を確認
    expect(screen.getByLabelText(/メールアドレス/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/パスワード/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ログイン状態を保持/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ログイン/i })).toBeInTheDocument();
    expect(screen.getByText(/パスワードを忘れた/i)).toBeInTheDocument();
  });

  it('必須フィールドのバリデーションが機能する', async () => {
    render(<LoginForm />);

    // 空のフォームを送信
    fireEvent.click(screen.getByRole('button', { name: /ログイン/i }));

    // エラーメッセージを確認
    await waitFor(() => {
      expect(screen.getByText(/メールアドレスは必須です/i)).toBeInTheDocument();
      expect(screen.getByText(/パスワードは8文字以上/i)).toBeInTheDocument();
    });
  });

  it('無効なメールアドレスのバリデーションが機能する', async () => {
    render(<LoginForm />);

    // 無効なメールアドレスを入力
    await userEvent.type(screen.getByLabelText(/メールアドレス/i), 'invalid-email');
    fireEvent.blur(screen.getByLabelText(/メールアドレス/i));

    // エラーメッセージを確認
    await waitFor(() => {
      expect(screen.getByText(/有効なメールアドレスを入力してください/i)).toBeInTheDocument();
    });
  });

  it('パスワードの要件チェックが機能する', async () => {
    render(<LoginForm />);

    // 要件を満たさないパスワードを入力
    await userEvent.type(screen.getByLabelText(/パスワード/i), 'weakpass');
    fireEvent.blur(screen.getByLabelText(/パスワード/i));

    // エラーメッセージを確認
    await waitFor(() => {
      expect(screen.getByText(/大文字、小文字、数字、特殊文字を含める必要があります/i)).toBeInTheDocument();
    });
  });

  it('有効なフォーム入力が正しく送信される', async () => {
    render(<LoginForm />);

    // 有効な値を入力
    await userEvent.type(screen.getByLabelText(/メールアドレス/i), 'test@example.com');
    await userEvent.type(screen.getByLabelText(/パスワード/i), 'StrongPass1!');
    
    // ログイン状態を保持をチェック
    await userEvent.click(screen.getByLabelText(/ログイン状態を保持/i));

    // フォームを送信
    await userEvent.click(screen.getByRole('button', { name: /ログイン/i }));

    // ボタンの状態を確認
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /ログイン中/i })).toBeDisabled();
    });
  });

  it('パスワードリセットボタンが機能する', async () => {
    render(<LoginForm />);

    // パスワードリセットボタンをクリック
    await userEvent.click(screen.getByText(/パスワードを忘れた/i));

    // 必要なUIの変更やコールバックを確認
    await waitFor(() => {
      // ここではコンソールログの出力を確認
      expect(console.log).toHaveBeenCalledWith('Password reset requested');
    });
  });

  it('アクセシビリティ要件を満たしている', () => {
    const { container } = render(<LoginForm />);

    // フォームのアクセシビリティをチェック
    expect(container).toHaveNoViolations();

    // 必須フィールドのaria属性を確認
    const emailInput = screen.getByLabelText(/メールアドレス/i);
    expect(emailInput).toHaveAttribute('aria-required', 'true');
    
    const passwordInput = screen.getByLabelText(/パスワード/i);
    expect(passwordInput).toHaveAttribute('aria-required', 'true');
  });
});