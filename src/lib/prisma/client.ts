/**
 * Prismaクライアントのシングルトンインスタンスを管理するモジュール
 * 
 * 開発時のホットリロードでインスタンスが重複して作成されるのを防ぐため、
 * グローバルオブジェクトにインスタンスを保存します。
 */

import { PrismaClient } from "@prisma/client";
import type { Prisma } from "@prisma/client";

declare global {
  // globalThis型にprismaプロパティを追加
  var prisma: PrismaClient | undefined;
}

const prismaClientOptions: Prisma.PrismaClientOptions = {
  log: process.env.NODE_ENV === "development" 
    ? [
        { level: "query", emit: "stdout" },
        { level: "error", emit: "stdout" },
        { level: "warn", emit: "stdout" }
      ]
    : [{ level: "error", emit: "stdout" }],
};

function createPrismaClient(): PrismaClient {
  const client = new PrismaClient(prismaClientOptions);

  // 開発環境のみデバッグログを有効化
  if (process.env.NODE_ENV === "development") {
    client.$use(async (params, next) => {
      const before = Date.now();
      const result = await next(params);
      const after = Date.now();
      console.log(`Query ${params.model}.${params.action} took ${after - before}ms`);
      return result;
    });
  }

  return client;
}

let prismaClient: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prismaClient = createPrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = createPrismaClient();
  }
  prismaClient = global.prisma;
}

export { prismaClient as prisma };
export default prismaClient;