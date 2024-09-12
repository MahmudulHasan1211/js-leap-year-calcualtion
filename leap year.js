function leapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true
    }
    else if (year % 400 === 0) {
        return true;
    }
    return 'not a leap year'
}

// indirectly value assign 
const count = leapYear(1900)
console.log(count)

// Directly value assign
// console.log(leapYear(1800))