// leap year 
function leapY(year) {
    if (year % 100 !== 0 && year % 4 === 0){
        console.log("leap year")
        return true
    }
    
    else if(year % 100 === 0 && year % 400 === 0){
        console.log("leap year")
        return true;
    }
    else{
       return false
    }
}
console.log(leapY(2000))