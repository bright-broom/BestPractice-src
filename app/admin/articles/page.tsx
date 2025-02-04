import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  PlusCircle,
  Search,
  FileEdit,
  Trash2,
  Eye,
  Filter,
} from "lucide-react";
import Link from "next/link";

export default async function ArticlesPage() {
  // 注: 実際の実装では、これらの値はデータベースから取得します
  const articles = [
    {
      id: 1,
      title: "Next.js 13の新機能について",
      status: "published",
      author: "山田太郎",
      views: 1234,
      publishedAt: "2024-02-01",
    },
    {
      id: 2,
      title: "TypeScriptベストプラクティス",
      status: "draft",
      author: "鈴木一郎",
      views: 0,
      publishedAt: null,
    },
    {
      id: 3,
      title: "フロントエンド開発の未来",
      status: "published",
      author: "佐藤花子",
      views: 567,
      publishedAt: "2024-01-28",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-2">記事管理</h1>
          <p className="text-gray-600">記事の作成、編集、公開を管理できます。</p>
        </div>
        <Button asChild>
          <Link href="/admin/articles/new">
            <PlusCircle className="h-4 w-4 mr-2" />
            新規記事作成
          </Link>
        </Button>
      </div>

      {/* 検索・フィルターバー */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="記事を検索..."
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          フィルター
        </Button>
      </div>

      {/* 記事一覧テーブル */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead>タイトル</TableHead>
              <TableHead>ステータス</TableHead>
              <TableHead>著者</TableHead>
              <TableHead className="text-right">閲覧数</TableHead>
              <TableHead>公開日</TableHead>
              <TableHead className="w-28">アクション</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {articles.map((article) => (
              <TableRow key={article.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">{article.title}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      article.status === "published"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {article.status === "published" ? "公開中" : "下書き"}
                  </span>
                </TableCell>
                <TableCell>{article.author}</TableCell>
                <TableCell className="text-right">{article.views}</TableCell>
                <TableCell>
                  {article.publishedAt || <span className="text-gray-400">-</span>}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      asChild
                    >
                      <Link href={`/blog/${article.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      asChild
                    >
                      <Link href={`/admin/articles/${article.id}/edit`}>
                        <FileEdit className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}