import { Injectable } from '@nestjs/common';
import * as metrics from 'datadog-metrics';
import * as os from 'os';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MetricsRepository {
  constructor(private readonly config: ConfigService) {
    metrics.init({
      host: os.hostname(),
      prefix: config.get('DATADOG_SERVICE_NAME') + '.',
      apiHost: config.get('DATADOG_URL'),
      flushIntervalSeconds: 60,
    });
  }

  increment(
    key: string,
    value?: number,
    tags?: string[],
    timestamp?: number,
  ): void {
    metrics.increment(key, value, tags, timestamp);
  }
}
