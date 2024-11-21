import { Controller, Post, Body } from '@nestjs/common';
import { UnitConverterService } from 'src/conversion/conversion.service';
// import { UnitConverterService } from './unit-converter.service';

@Controller('conversion')
export class ConversionController {
  constructor(private readonly unitConverterService: UnitConverterService) {}

  @Post('length')
  convertLength(@Body() body: { value: number; fromUnit: string; toUnit: string }) {
    const { value, fromUnit, toUnit } = body;
    const convertedValue = this.unitConverterService.convertLength(value, fromUnit, toUnit);

    return {
      original: `${value} ${fromUnit}`,
      converted: `${convertedValue} ${toUnit}`,
    };
  }

  @Post('weight')
  convertWeight(@Body() body: { value: number; fromUnit: string; toUnit: string }) {
    const { value, fromUnit, toUnit } = body;
    const convertedValue = this.unitConverterService.convertWeight(value, fromUnit, toUnit);

    return {
      original: `${value} ${fromUnit}`,
      converted: `${convertedValue} ${toUnit}`,
    };
  }

  @Post('temperature')
  convertTemperature(@Body() body: { value: number; fromUnit: string; toUnit: string }) {
    const { value, fromUnit, toUnit } = body;
    const convertedValue = this.unitConverterService.convertTemperature(value, fromUnit, toUnit);

    return {
      original: `${value} ${fromUnit}`,
      converted: `${convertedValue} ${toUnit}`,
    };
  }
}
