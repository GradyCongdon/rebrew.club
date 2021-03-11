import React from 'react';

export interface BrewSessionType {
    brewNumber: number;
    time: number;
    temperature: number;
    temperatureUnit: string;
    water: number;
    waterUnit: string;
    weight: number;
    weightUnit: string;
}

interface BrewSessionProps {
    // sessionId: string;
    brew: BrewSessionType;
}

export const mockBrews = [
    {
        brewNumber: 1,
        time: 15,
        temperature: 195,
        temperatureUnit: '°F',
        water: 120,
        waterUnit: 'g',
        mass: 9,
        massUnit: 'g',
    },
    {
        brewNumber: 2,
        time: 30,
        temperature: 195,
        temperatureUnit: 'F',
        water: 110,
        waterUnit: 'g',
        mass: 9,
        massUnit: 'g',
    },
];



export const BrewSession = ({ brew }: BrewSessionProps) => {
    const { brewNumber, time, temperature, water, weight, temperatureUnit, waterUnit, weightUnit } = brew;
    return (
        <div className="brew-session">
            <span className="session-brew-number">{brewNumber}</span>
            <span className="session-time">{time}s</span>
            <span className="session-weight">{weight}{weightUnit}</span>
            <span className="session-temperature">{temperature}°{temperatureUnit}</span>
            <span className="session-water">{water}{waterUnit}</span>
        </div>
    );
};
