function convertTemperature(temperature, unit) {
    const celcius = 'C';
    const fahren = 'F'
    if(unit===celcius){
        console.log(((temperature - 32) * 5) / 9)
        console.log(unit)
    }
    else if(unit===fahren) {
        console.log(((temperature * 9 )/ 5) + 32)
        console.log(unit)
    }
}
convertTemperature(98.6, 'F');