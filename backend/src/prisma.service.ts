import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from './generated/client.js';

//test
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', () => {
      app.close();
    });
  }
}
