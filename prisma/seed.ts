import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🔄 Seeding the database...");

  const email = "admin@example.com";
  const plainPassword = "password123"; // ⚠️ 必ず変更してください！
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  // 📌 既にユーザーが存在するかチェック
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    console.log("⚠️ Admin user already exists. Skipping creation.");
    return;
  }

  // ✅ ユーザー作成
  await prisma.user.create({
    data: {
      name: "Admin User",
      email,
      password: hashedPassword,
      role: "admin", // 🔥 権限フィールドを追加
    },
  });

  console.log(`✅ Admin user created: ${email} / ${plainPassword}`);
}

main()
  .catch((error) => {
    console.error("❌ Seed error:", error);
    process.exit(1); // 異常終了
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("🔌 Disconnected from the database.");
  });
