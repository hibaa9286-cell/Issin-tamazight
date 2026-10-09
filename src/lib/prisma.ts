let prismaClient: any = null;

try {
  const { PrismaClient } = require('@prisma/client');
  if (process.env.DATABASE_URL) {
    prismaClient = new PrismaClient({ log: ['query', 'error', 'warn'] });
  }
} catch (e) {
  prismaClient = null;
}

export const prisma = prismaClient;
