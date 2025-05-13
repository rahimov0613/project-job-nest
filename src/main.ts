import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Job API')
    .setDescription('The job API description')
    .setVersion('1.0');

  const documentFactory = () => SwaggerModule.createDocument(app, config.build());
  SwaggerModule.setup('api', app, documentFactory(),)



  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
