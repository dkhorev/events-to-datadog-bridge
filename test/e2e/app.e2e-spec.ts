import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (POST) should return code 201', () => {
    return request(app.getHttpServer()).post('/').expect(201);
  });

  it('/ (POST) should return empty body', () => {
    return request(app.getHttpServer()).post('/').expect('');
  });

  it('/ (GET) should return code 201', () => {
    return request(app.getHttpServer()).get('/').expect(200);
  });

  it('/ (GET) should return OK', () => {
    return request(app.getHttpServer()).get('/').expect('OK');
  });
});
