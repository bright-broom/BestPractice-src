import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("password123", 10);

  await prisma.user.create({
    data: {
      name: "Admin User",
      email: "admin@example.com",
      password: hashedPassword,
    },
  });

  console.log("✅ Database has been seeded.");
}

main()
  .catch((e) => console.error("❌ Seed error:", e))
  .finally(async () => {
    await prisma.$disconnect();
  });
