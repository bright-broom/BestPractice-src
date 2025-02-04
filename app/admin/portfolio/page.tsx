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
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

export default async function PortfolioPage() {
  // 注: 実際の実装では、これらの値はデータベースから取得します
  const portfolioItems = [
    {
      id: 1,
      title: "ECサイトリニューアル",
      category: "Web開発",
      client: "株式会社ABC",
      status: "completed",
      completedAt: "2024-01-15",
      url: "https://example.com",
    },
    {
      id: 2,
      title: "スマートフォンアプリ開発",
      category: "モバイル",
      client: "XYZ株式会社",
      status: "in_progress",
      completedAt: null,
      url: null,
    },
    {
      id: 3,
      title: "コーポレートサイト制作",
      category: "Web制作",
      client: "DEF株式会社",
      status: "completed",
      completedAt: "2024-02-01",
      url: "https://example.com/def",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-2">ポートフォリオ管理</h1>
          <p className="text-gray-600">
            実績とプロジェクトの管理ができます。
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/portfolio/new">
            <PlusCircle className="h-4 w-4 mr-2" />
            新規プロジェクト追加
          </Link>
        </Button>
      </div>

      {/* 検索・フィルターバー */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="プロジェクトを検索..."
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          フィルター
        </Button>
      </div>

      {/* プロジェクト一覧テーブル */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead>プロジェクト名</TableHead>
              <TableHead>カテゴリー</TableHead>
              <TableHead>クライアント</TableHead>
              <TableHead>ステータス</TableHead>
              <TableHead>完了日</TableHead>
              <TableHead className="w-28">アクション</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {portfolioItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.client}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {item.status === "completed" ? "完了" : "進行中"}
                  </span>
                </TableCell>
                <TableCell>
                  {item.completedAt || <span className="text-gray-400">-</span>}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      asChild
                    >
                      <Link href={`/portfolio/${item.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      asChild
                    >
                      <Link href={`/admin/portfolio/${item.id}/edit`}>
                        <FileEdit className="h-4 w-4" />
                      </Link>
                    </Button>
                    {item.url && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        asChild
                      >
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
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