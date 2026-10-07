import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };

export const prisma =
  globalForPrisma.prisma ||
  (process.env.DATABASE_URL
    ? new PrismaClient({ log: ['query', 'error', 'warn'] })
    : (null as unknown as PrismaClient));

if (process.env.NODE_ENV !== 'production' && process.env.DATABASE_URL) {
  globalForPrisma.prisma = prisma;
}
