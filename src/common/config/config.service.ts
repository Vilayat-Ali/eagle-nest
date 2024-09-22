import { Injectable } from '@nestjs/common';
import { ConfigService as NestJsConfigService } from '@nestjs/config';

// validation schema
import { type ValidatedEnvs } from './zod/env.z';

@Injectable()
export class ConfigService extends NestJsConfigService<ValidatedEnvs> {
  constructor() {
    super();
  }

  get IS_PRODUCTION(): boolean {
    return this.get('NODE_ENV', { infer: true }) === 'production';
  }
}
