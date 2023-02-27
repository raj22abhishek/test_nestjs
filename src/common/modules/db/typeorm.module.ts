import { Module } from '@nestjs/common';
import { dbProviders } from '../../services/database/db.service';
@Module({
  providers: [...dbProviders],
  exports: [...dbProviders],
})
export class DBModule {}
