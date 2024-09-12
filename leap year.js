function leapYear (year){
    if (year % 4 === 0 && year % 100 !== 0){
        return true
    }
    else if(year % 400 === 0 && year % 100 === 0){
        return true;
    }
    return 'not a leap year'
}


const count = leapYear(2024)
console.log(count)