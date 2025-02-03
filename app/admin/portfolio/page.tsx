import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ポートフォリオ管理 | Best Practice Portfolio",
  description: "ポートフォリオプロジェクトの管理",
};

export default function PortfolioPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">ポートフォリオ管理</h1>
      <div className="p-6 bg-white rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            新規プロジェクト追加
          </button>
          <div className="flex gap-2">
            <select
              className="px-4 py-2 border rounded"
              aria-label="プロジェクトカテゴリーでフィルター"
            >
              <option value="">すべてのカテゴリー</option>
              <option value="web">Webアプリ</option>
              <option value="mobile">モバイルアプリ</option>
              <option value="other">その他</option>
            </select>
            <input
              type="search"
              placeholder="プロジェクトを検索..."
              className="px-4 py-2 border rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 border rounded-lg">
            <p className="text-center text-gray-500">
              プロジェクトがありません
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}