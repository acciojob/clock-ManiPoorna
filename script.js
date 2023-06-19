//your JS code here. If required.
const date  = new Date();
const displayDate = date.getFullYear() +'-'+ (date.getMonth()+1) +'-'+date.getDate()+","; 
document.getElementById("date").innerHTML = displayDate;
const displayTime = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
document.getElementById("timer").innerHTML = displayTime;