import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../../src/app.controller';
import { AppService } from '../../src/app.service';
import { MetricsModule } from '../../src/metrics/metrics.module';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        MetricsModule,
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        ThrottlerModule.forRoot({
          ttl: 60,
          limit: 60,
        }),
      ],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('new()', () => {
    it('should return empty body', () => {
      expect(appController.new()).toBe('');
    });

    it('should call AppService.new() once', () => {
      jest.spyOn(appService, 'new').mockImplementation(() => '');

      appController.new();

      expect(appService.new).toHaveBeenCalledTimes(1);
    });
  });

  describe('health', () => {
    it('should return OK', () => {
      expect(appController.health()).toBe('OK');
    });
  });
});
