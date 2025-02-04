import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  PlusCircle,
  FileText,
  Briefcase,
  Users,
  Activity,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default async function AdminPage() {
  // 注: 実際の実装では、これらの値はデータベースから取得します
  const stats = {
    articles: 12,
    portfolioItems: 8,
    activeUsers: 45,
    monthlyViews: 1234,
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-2">ダッシュボード</h1>
        <p className="text-gray-600">
          サイトの統計情報と主要な管理タスクの概要を確認できます。
        </p>
      </div>

      {/* クイックアクション */}
      <section>
        <h2 className="text-lg font-semibold mb-4">クイックアクション</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button asChild className="h-auto py-4 flex flex-col items-center">
            <Link href="/admin/articles/new">
              <PlusCircle className="h-6 w-6 mb-2" />
              <span>新規記事作成</span>
            </Link>
          </Button>
          <Button asChild className="h-auto py-4 flex flex-col items-center">
            <Link href="/admin/portfolio/new">
              <PlusCircle className="h-6 w-6 mb-2" />
              <span>新規ポートフォリオ作成</span>
            </Link>
          </Button>
          <Button asChild className="h-auto py-4 flex flex-col items-center">
            <Link href="/admin/users/new">
              <PlusCircle className="h-6 w-6 mb-2" />
              <span>新規ユーザー作成</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* 統計カード */}
      <section>
        <h2 className="text-lg font-semibold mb-4">サイト統計</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">総記事数</p>
                <p className="text-2xl font-bold">{stats.articles}</p>
              </div>
              <FileText className="h-8 w-8 text-blue-500" />
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">ポートフォリオ数</p>
                <p className="text-2xl font-bold">{stats.portfolioItems}</p>
              </div>
              <Briefcase className="h-8 w-8 text-green-500" />
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">アクティブユーザー</p>
                <p className="text-2xl font-bold">{stats.activeUsers}</p>
              </div>
              <Users className="h-8 w-8 text-purple-500" />
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">月間ビュー数</p>
                <p className="text-2xl font-bold">{stats.monthlyViews}</p>
              </div>
              <Activity className="h-8 w-8 text-orange-500" />
            </div>
          </Card>
        </div>
      </section>

      {/* 最近の活動 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">最近の活動</h2>
        <Card className="p-4">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-full">
                <FileText className="h-4 w-4 text-blue-500" />
              </div>
              <div>
                <p className="font-medium">新しい記事が公開されました</p>
                <p className="text-sm text-gray-600">2時間前</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-green-100 rounded-full">
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <div>
                <p className="font-medium">月間アクセス数が増加しています</p>
                <p className="text-sm text-gray-600">12時間前</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-purple-100 rounded-full">
                <Users className="h-4 w-4 text-purple-500" />
              </div>
              <div>
                <p className="font-medium">新規ユーザーが登録しました</p>
                <p className="text-sm text-gray-600">1日前</p>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
