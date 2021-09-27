import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as helmet from 'helmet';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ValidateInputPipe } from './core/pipes/validate.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // global prefix
  app.setGlobalPrefix('api/v1');

  //swagger documenatation config
  const config = new DocumentBuilder()
    .setTitle('Clothing Store API')
    .setDescription(
      'All the resources avalaibles for this API are described below',
    )
    .setVersion('1.0')
    .addTag('clothingstore')
    .setBasePath('api/v1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1', app, document);

  //cors domains
  const whitelist = process.env.CORS_WHITELIST;

  //cors config
  app.enableCors({
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(
          new HttpException('Not allowed by CORS', HttpStatus.BAD_REQUEST),
        );
      }
    },
  });

  //helmet security middlewares loader
  app.use(helmet());

  // handle all user input validation globally
  app.useGlobalPipes(new ValidateInputPipe());

  //server up
  await app.listen(3000);
}
bootstrap();
