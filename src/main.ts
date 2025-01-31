import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Backend UberCuba')
        .setDescription('API for UberCuba')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    //  // Verificar conexión a la base de datos
    //  const connection = await app.get('DataSource').initialize(); // Asegúrate de importar DataSource
    //  console.log('Conexión a la base de datos establecida:', connection.isConnected);

    await app.listen(3001);
}
bootstrap();
