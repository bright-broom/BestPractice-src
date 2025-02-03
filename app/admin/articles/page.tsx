import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "記事管理 | Best Practice Portfolio",
  description: "記事の作成・編集・削除",
};

export default function ArticlesPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">記事管理</h1>
      <div className="p-6 bg-white rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <button 
            type="button" 
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            新規記事作成
          </button>
          <div className="flex gap-2">
            <input
              type="search"
              placeholder="記事を検索..."
              className="px-4 py-2 border rounded"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  タイトル
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  ステータス
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  作成日
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  アクション
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  記事がありません
                </td>
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