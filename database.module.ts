import { Module } from '@nestjs/common';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';
import { DatabaseController } from './database.controller';
import { DatabaseController } from './database.controller';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';

@Module({
  controllers: [DatabaseController],
  providers: [DatabaseService]
})
export class DatabaseModule {}
