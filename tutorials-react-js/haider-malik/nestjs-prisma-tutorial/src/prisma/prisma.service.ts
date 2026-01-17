import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg'; // Kamu butuh install 'pg' kalau belum
import * as dotenv from 'dotenv'; // Import dotenv

// 1. Paksa baca .env sekarang juga!
dotenv.config();

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    // 2. Sekarang process.env pasti sudah ada isinya
    const connectionString = process.env.DATABASE_URL;

    // Cek dulu biar gak error aneh-aneh
    if (!connectionString) {
      throw new Error('DATABASE_URL is missing in .env file');
    }

    // 3. Best Practice: Buat Pool dulu baru masukin ke Adapter
    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);

    console.log('Adapter Configured:', { connectionString }); // Debugging

    super({ adapter: adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
