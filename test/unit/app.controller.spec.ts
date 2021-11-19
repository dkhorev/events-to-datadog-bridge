import { Test } from '@nestjs/testing';
import { AppController } from '../../src/app.controller';
import { AppService } from '../../src/app.service';
import { AppModule } from '../../src/app.module';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      imports: [AppModule],
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
