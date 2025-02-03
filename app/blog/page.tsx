import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログ | Best Practice Portfolio",
  description: "技術記事や開発に関する情報を発信するブログ",
};

export default function BlogPage() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-4xl font-bold">ブログ</h1>
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <select
              className="px-4 py-2 border rounded"
              aria-label="記事カテゴリーでフィルター"
            >
              <option value="">すべてのカテゴリー</option>
              <option value="tech">技術</option>
              <option value="design">デザイン</option>
              <option value="career">キャリア</option>
            </select>
            <input
              type="search"
              placeholder="記事を検索..."
              className="px-4 py-2 border rounded"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="overflow-hidden bg-white rounded-lg shadow">
          <div className="bg-gray-100 aspect-w-16 aspect-h-9" />
          <div className="p-6">
            <p className="mb-2 text-sm font-semibold text-blue-600">技術</p>
            <h2 className="mb-3 text-xl font-bold">記事がありません</h2>
            <p className="mb-4 text-gray-600">
              まだ記事が投稿されていません。
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-4">投稿日: --/--/--</span>
              <span>読了時間: -- 分</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}