import { create } from "zustand";
import { z } from "zod";
import { devtools } from "zustand/middleware";

/**
 * ユーザー情報のスキーマ
 */
export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email().optional(),
  role: z.enum(["user", "admin"]).default("user"),
  createdAt: z.date().optional(),
});

export type User = z.infer<typeof userSchema>;

/**
 * 認証状態の型定義
 */
interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
  setUser: (user: User | null) => void;
  setError: (error: Error | null) => void;
  setLoading: (isLoading: boolean) => void;
  logout: () => void;
}

/**
 * 認証状態を管理するストア
 * @see https://zustand-demo.pmnd.rs/
 */
export const useAuthStore = create<AuthState>()(
  devtools(
    (set) => ({
      user: null,
      isLoading: false,
      error: null,
      setUser: (user) => {
        try {
          // userがnullでない場合のみバリデーション
          if (user) {
            userSchema.parse(user);
          }
          set({ user, error: null });
        } catch (error) {
          console.error("Invalid user data:", error);
          set({ error: new Error("Invalid user data") });
        }
      },
      setError: (error) => set({ error }),
      setLoading: (isLoading) => set({ isLoading }),
      logout: () => set({ user: null, error: null }),
    }),
    {
      name: "auth-store",
      enabled: process.env.NODE_ENV === "development",
    }
  )
);