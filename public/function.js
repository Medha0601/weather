// const curDate = document.getElementById("date");
// let weatherCondition = document.getElementById("weatherCondition");

// // lets suppose the weather conditon is cloud
// const tempStatus = "Clouds";

// // function for gettig the current day
// const getCurrentDay = () =>{
//     var weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
//     // weekday[0] = "Sunday";
//     // weekday[1] = "Monday";
//     // weekday[2] = "Tuesday";
//     // weekday[3] = "Wednesday";
//     // weekday[4] = "Thursday";
//     // weekday[5] = "Friday";
//     // weekday[6] = "Saturday";
    
//     // gettignt he cuurent date
//     let currentTime = new Date();
//     console.log(weekday[currentTime.getDay()]) ;
//      var final = weekday[currentTime.getDay()];
//     return final;
// };

// // function for getting the current time
// const getCurrentTime = () =>{
//     var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"]

    
//     const now = new Date();
//     const mon = months[now.getMonth() + 1];
//     const day = now.getDate();
//     console.log("month" + mon + "day" + day);

//     // for gettign the minutes and  hors
//     let hours = now.getHours();
//     const minutes = now.getMinutes();

    
//     let period= "AM";
//     // for setting am or pm
//     if(hours>11){
//         period = "PM";
//         // for alwasy in 12 hours
//         if(hours>12)
//         hours = hours- 12;
//     }
//     if(minutes<10){
//         minutes = "0" + minutes;
//     }
//     console.log(hours + ": " + minutes + " " + period);

//    var time =   mon + day + " | " + hours + ":" + minutes + period; 
//     return time;
// }
// // getCurrentDay();
// // getCurrentTime();

// // now adding to the html file on that date position
// curDate.innerHTML = getCurrentDay()  + " | " + getCurrentTime();


var final = document.getElementById("date");


// FUNCTION FOR GETTING THE DAY
function CurrentDay(){
    var weekday = ["Sun", "Mon", "Tue", "Wed", "Thurs","Fri","Sat"];
    let day = new  Date();
    // from this code we will get the day in number.
    console.log(weekday[day.getDay()]);     
    // so to get the value in string we will create array
    var finalDay = weekday[day.getDay()];
    return finalDay;
};

// FUNCTION FOR GETTING THE DATE AND TIME
function CurrentDate(){
    let months = ['JAN', 'FEB','MAR', 'APR','MAY','JUNE', 'JULY','AUG', 'SEPT', 'OCT','NOV', 'DEC'];
    let day = new Date();
    let month = months[day.getMonth() ];
    let date = day.getDate();
    console.log(month + " " + date);
    // again in this we got the number to get string we will use array


    // we have got the day, date
    // now we want time
    let hour = day.getHours();
    let minutes = day.getMinutes();
    

    // now for the am and pm
     let period ="AM";
    
     // here hour and pm is handled
    if(hour > 11){
        period = "PM";
        if(hour > 12){
            // for getting the time in 1-12
            hour = hour - 12;
        };
    };

    // for handling the minutes. that it should be 05 not 5

    if(minutes < 10){
        minutes = "0" + minutes;
    };

    console.log(hour + ":" + minutes);
      var time = month + " " + date + " | " + hour + ":" + minutes + period;
      return time;
    // as for now we have got everything. we have got hour minutes, day
};

// now for changing the main in html
final.innerHTML = CurrentDay() + " | " + CurrentDate();

// CurrentDay();
// CurrentDate();
