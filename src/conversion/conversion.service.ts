import { Injectable } from '@nestjs/common';

@Injectable()
export class UnitConverterService {
  // Length conversion factors (relative to meters)
  private lengthFactors = {
    millimeter: 0.001,
    centimeter: 0.01,
    meter: 1,
    kilometer: 1000,
    inch: 0.0254,
    foot: 0.3048,
    yard: 0.9144,
    mile: 1609.344,
  };

  // Weight conversion factors (relative to kilograms)
  private weightFactors = {
    milligram: 0.000001,
    gram: 0.001,
    kilogram: 1,
    ounce: 0.0283495,
    pound: 0.453592,
  };

  // Convert Length
  convertLength(value: number, fromUnit: string, toUnit: string): number {
    const fromFactor = this.lengthFactors[fromUnit];
    const toFactor = this.lengthFactors[toUnit];

    if (!fromFactor || !toFactor) {
      throw new Error('Invalid length units');
    }

    return (value * fromFactor) / toFactor; // Convert to meters, then to the target unit
  }

  // Convert Weight
  convertWeight(value: number, fromUnit: string, toUnit: string): number {
    const fromFactor = this.weightFactors[fromUnit];
    const toFactor = this.weightFactors[toUnit];

    if (!fromFactor || !toFactor) {
      throw new Error('Invalid weight units');
    }

    return (value * fromFactor) / toFactor; // Convert to kilograms, then to the target unit
  }

  // Convert Temperature
  convertTemperature(value: number, fromUnit: string, toUnit: string): number {
    if (fromUnit === toUnit) {
      return value; // No conversion needed
    }

    switch (fromUnit) {
      case 'Celsius':
        if (toUnit === 'Fahrenheit') {
          return value * 1.8 + 32;
        } else if (toUnit === 'Kelvin') {
          return value + 273.15;
        }
        break;

      case 'Fahrenheit':
        if (toUnit === 'Celsius') {
          return (value - 32) / 1.8;
        } else if (toUnit === 'Kelvin') {
          return (value - 32) / 1.8 + 273.15;
        }
        break;

      case 'Kelvin':
        if (toUnit === 'Celsius') {
          return value - 273.15;
        } else if (toUnit === 'Fahrenheit') {
          return (value - 273.15) * 1.8 + 32;
        }
        break;

      default:
        throw new Error('Invalid temperature units');
    }

    throw new Error('Invalid temperature units');
  }
}
