import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const user: Prisma.userCreateInput[] = [
  {
    email: 'test1@test.com',
    name: 'test1',
    password:'qwer1234!'
  },
];

async function main() {
  for (const u of user) {
    await prisma.user.create({
      data: u,
    });
  }
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
