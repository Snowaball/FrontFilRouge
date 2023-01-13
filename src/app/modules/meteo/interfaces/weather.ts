export interface HistoryChart {
    title:string,
    releve:string
}

export interface WeatherForm {
    id?:number,
    start?:string,
    end?:string,
}

export interface Weather {
    latitude:number,
    longitude:number,
    generationtime_ms:number,
    utc_offset_seconds:number,
    timezone:string,
    timezone_abbreviation:string,
    elevation:number,
    current_weather:CurrentWeather,
    hourly_units:HourlyUnits,
    hourly:Hourly,
}

export interface CurrentWeather {
    temperature:number,
    windspeed:number,
    winddirection:number,
    weathercode:number,
    time:string,
}

export interface Hourly {
    [time:string]:string[];
}    

export interface HourlyUnits {
    [name:string]:string;
}
