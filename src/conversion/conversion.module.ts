import { Module } from '@nestjs/common';
import { ConversionController } from './conversion.controller';
import { UnitConverterService } from './conversion.service';

@Module({
  controllers: [ConversionController],
  providers: [UnitConverterService],
})
export class ConversionModule {}
