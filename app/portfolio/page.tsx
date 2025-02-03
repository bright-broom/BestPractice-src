import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ポートフォリオ | Best Practice Portfolio",
  description: "これまでに手がけたプロジェクトやお仕事の実績紹介",
};

export default function PortfolioPage() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-4xl font-bold">ポートフォリオ</h1>
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <select
              className="px-4 py-2 border rounded"
              aria-label="プロジェクトカテゴリーでフィルター"
            >
              <option value="">すべてのカテゴリー</option>
              <option value="web">Webアプリ</option>
              <option value="mobile">モバイルアプリ</option>
              <option value="other">その他</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="overflow-hidden bg-white rounded-lg shadow group">
          <div className="relative">
            <div className="bg-gray-100 aspect-w-16 aspect-h-9" />
            <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black/50 group-hover:opacity-100">
              <button
                type="button"
                className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                詳細を見る
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="flex gap-2 mb-2">
              <span className="px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded">
                Webアプリ
              </span>
            </div>
            <h2 className="mb-3 text-xl font-bold">プロジェクトがありません</h2>
            <p className="mb-4 text-gray-600">
              まだプロジェクトが登録されていません。
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>開発期間: -- ヶ月</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}