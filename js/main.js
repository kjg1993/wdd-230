/* First I declare a function named updateModified and that*/ 
/*runs every time I update my root document*/
var updateModified = function(){
    /*convert document.lastModified to an object and I put into variable
    /* called lastModified*/
    let lastModified = new Date(document.lastModified), 
    /*get the day, month, and etc, from my lastModified object*/ 
    day = lastModified.getDay(),
    month = lastModified.getMonth(),
    year = lastModified.getFullYear(),
    hour = lastModified.getHours(),
    minutes = lastModified.getMinutes(),
    seconds = lastModified.getSeconds(),
    txt = "/"
    twoPoints = ":" 
    /*input to encompass tags mediated by their respective ID */
    spanMonth = document.getElementById("month"),
    spanDay = document.getElementById("day"),
    spanYear = document.getElementById("year"),  
    spanHour = document.getElementById("hours"), 
    spanMinutes = document.getElementById("minutes"),
    spanSeconds = document.getElementById("seconds");
    //I created an array with the names of the months of the year
    monthNames = ["January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"];
    spanMonth.textContent = monthNames[month]+ txt;
     //I created an array with the names of the days of the week
    dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    spanDay.textContent = dayNames[day]+ txt;  
    spanYear.textContent = year;
    spanHour.textContent = hour + twoPoints;
    spanMinutes.textContent = minutes + twoPoints;
    spanSeconds.textContent = seconds;    
};
//here I run my function 
updateModified(); 