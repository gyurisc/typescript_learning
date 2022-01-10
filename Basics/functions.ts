function divide(a : number, b : number) : number {
    return a / b;
}

const multiply = function(a : number, b : number) : number {
    return a * b;
}

const logger = (message: string) : void => {
    console.log(message);
}

const throwOnError = (message: string) : never => {
    throw new Error(message);
}

const todaysWeather =  {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forecast: {date: Date, weather: string}) : void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}

logWeather(todaysWeather);