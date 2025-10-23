import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //swagger
  const config = new DocumentBuilder()
    .setTitle('API ERP')
    .setDescription('API ERP')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentacion', app, documentFactory);


  app.setGlobalPrefix('API');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
