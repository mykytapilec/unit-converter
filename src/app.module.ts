import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConversionController } from './conversion/conversion.controller';
import { ConversionModule } from './conversion/conversion.module';
import { UnitConverterService } from './conversion/conversion.service';

@Module({
  imports: [
    ConversionModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // Serve files from the "public" directory
    }),
  ],
  controllers: [ConversionController],
  providers: [UnitConverterService],
})
export class AppModule {}
