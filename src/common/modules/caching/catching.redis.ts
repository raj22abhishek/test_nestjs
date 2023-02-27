import { Module } from '@nestjs/common';
import { CachingService } from '../../services/cache/redis.service';
@Module({
  providers: [CachingService],
  exports: [CachingService],
})
export class RedisModule {}
