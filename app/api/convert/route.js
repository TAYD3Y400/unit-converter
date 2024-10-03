import { NextResponse } from "next/server";

const conversionFactors = new Map([
    ['length', new Map([
        ['meter-meter', 1],
        ['millimeter-meter', 0.001],
        ['meter-millimeter', 1000],
        ['centimeter-meter', 0.01],
        ['meter-centimeter', 100],
        ['decimeter-meter', 0.1],
        ['meter-decimeter', 10],
        ['micrometer-meter', 0.000001],
        ['meter-micrometer', 1000000],
        ['nanometer-meter', 0.000000001],
        ['meter-nanometer', 1000000000],
        ['meter-kilometer', 0.001],
        ['kilometer-meter', 1000],
        ['meter-foot', 3.28084],
        ['foot-meter', 0.3048],
        ['meter-yard', 1.09361],
        ['yard-meter', 0.9144],
        ['meter-mile', 0.000621371],
        ['mile-meter', 1609.34],
        ['meter-inch', 39.3701],
        ['inch-meter', 0.0254],
        ['meter-light year', 1.057e-16],
        ['light year-meter', 9.461e+15],
        ['meter-parsec', 3.24078e-17],
        ['parsec-meter', 3.08568e+16],
    ])],
    ['weight', new Map([
        ['gram-gram', 1],
        ['gram-milligram', 1000],
        ['milligram-gram', 0.001],
        ['gram-kilogram', 0.001],
        ['kilogram-gram', 1000],
        ['gram-pound', 0.00220462],
        ['pound-gram', 453.592],
        ['gram-ounce', 0.035274],
        ['ounce-gram', 28.3495],
        ['metric ton-gram', 1000000],
        ['gram-metric ton', 0.000001],
        ['long ton-gram', 1016000],
        ['gram-long ton', 0.000000984207],
        ['short ton-gram', 907185],
        ['gram-short ton', 0.00000110231],
    ])],
    ['temperature', new Map([
        ['celsius-fahrenheit', (value) => (value * 9/5) + 32],
        ['fahrenheit-celsius', (value) => (value - 32) * 5/9],
        ['celsius-kelvin', (value) => value + 273.15],
        ['kelvin-celsius', (value) => value - 273.15],
        ['fahrenheit-kelvin', (value) => (value - 32) * 5/9 + 273.15],
        ['kelvin-fahrenheit', (value) => (value - 273.15) * 9/5 + 32],
    ])]
]);

export async function POST(req) {
    const { value, convertFrom, convertTo, conversionType } = await req.json();
    switch (conversionType) {
        case 'length':
            return NextResponse.json({ result: convertLength(value, convertFrom, convertTo) });
        case 'weight':
            return NextResponse.json({ result: convertWeight(value, convertFrom, convertTo) });
        case 'temperature':
            return NextResponse.json({ result: convertTemperature(value, convertFrom, convertTo) });
        default:
            return NextResponse.json({ message: 'Invalid conversion type' }, { status: 400 });
    }
}

function convertLength(value, convertFrom, convertTo) {
    const unitToMeter = conversionFactors.get('length').get(`${convertFrom}-meter`.toLowerCase());
    const conversionFactor = conversionFactors.get('length').get(`meter-${convertTo}`.toLowerCase());
    return value * unitToMeter * conversionFactor;
}

function convertWeight(value, convertFrom, convertTo) {
    const unitToGram = conversionFactors.get('weight').get(`${convertFrom}-gram`.toLowerCase());
    const conversionFactor = conversionFactors.get('weight').get(`${convertFrom}-${convertTo}`.toLowerCase());
    return value * conversionFactor;
}

function convertTemperature(value, convertFrom, convertTo) {
    const conversionFunction = conversionFactors.get('temperature').get(`${convertFrom}-${convertTo}`.toLowerCase());
    return conversionFunction(value);
}