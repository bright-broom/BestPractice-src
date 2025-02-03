import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ユーザー管理 | Best Practice Portfolio",
  description: "ユーザーアカウントの管理",
};

export default function UsersPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">ユーザー管理</h1>
      <div className="p-6 bg-white rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            新規ユーザー追加
          </button>
          <div className="flex gap-2">
            <select 
              className="px-4 py-2 border rounded"
              aria-label="ユーザーロールでフィルター"
            >
              <option value="">すべてのロール</option>
              <option value="admin">管理者</option>
              <option value="editor">編集者</option>
              <option value="user">一般ユーザー</option>
            </select>
            <input
              type="search"
              placeholder="ユーザーを検索..."
              className="px-4 py-2 border rounded"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  名前
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  メールアドレス
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  ロール
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  ステータス
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  アクション
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  ユーザーがいません
                </td>
                <td className="px-6 py-4 whitespace-nowrap" />
                <td className="px-6 py-4 whitespace-nowrap" />
                <td className="px-6 py-4 whitespace-nowrap" />
                <td className="px-6 py-4 whitespace-nowrap" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}