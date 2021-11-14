import { Injectable } from '@nestjs/common';
import { MetricsRepository } from './metrics/metrics.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private readonly EVENT_NAME: string;

  constructor(
    private readonly metrics: MetricsRepository,
    private readonly config: ConfigService,
  ) {
    this.EVENT_NAME = config.get('EVENT_NAME');
  }

  new(): string {
    this.metrics.increment(this.EVENT_NAME);

    return '';
  }
}
