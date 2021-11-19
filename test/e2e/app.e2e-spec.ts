import { Test } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

describe('AppController (e2e)', () => {
  let app: NestFastifyApplication;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );

    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/ (POST) should return code 201', () => {
    return app
      .inject({
        method: 'POST',
        url: '/',
      })
      .then((result) => {
        expect(result.statusCode).toStrictEqual(201);
      });
  });

  it('/ (POST) should return empty body', () => {
    return app
      .inject({
        method: 'POST',
        url: '/',
      })
      .then((result) => {
        expect(result.payload).toStrictEqual('');
      });
  });

  it('/ (GET) should return code 201', () => {
    return app
      .inject({
        method: 'GET',
        url: '/',
      })
      .then((result) => {
        expect(result.statusCode).toStrictEqual(200);
      });
  });

  it('/ (GET) should return OK', () => {
    return app
      .inject({
        method: 'GET',
        url: '/',
      })
      .then((result) => {
        expect(result.payload).toStrictEqual('OK');
      });
  });
});
