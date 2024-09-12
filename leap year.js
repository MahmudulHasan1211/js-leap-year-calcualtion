function leapYear (year){
    if (year % 4 === 0){
        return leapYear
    }
    else{
        return 'not a leap year'
    }
}
console.log(leapYear(2024))