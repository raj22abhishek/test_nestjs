import { Injectable } from '@nestjs/common';
import { createClient } from 'redis';

@Injectable()
export class RedisService {
  async getRedisInstance(connectionIdentifier: {
    host: string;
    port: string | number;
    password?: string;
    instance?: string;
    database?: number;
    timeout?: number;
  }) {
    // const client = createClient(
    //   connectionIdentifier.port,
    //   connectionIdentifier.host,
    //   { no_ready_check: true },
    // );
    // client.get = promisify(client.get);
    // client.set = promisify(client.set);
    return;
  }
}
