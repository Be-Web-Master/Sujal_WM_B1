//19. Write a program to check if a given year is a leap year or not.

function isLeapYear(year) {
    if((year%4===0 && year%100!==0 )|| year%400===0) console.log(`${year} is a leap year`);
    else console.log(`${year} is not a leap year`);
}

isLeapYear(1904);