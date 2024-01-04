function showDate(){

    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

    today = new Date();
    date = today.getDate();
    hour = today.getHours();
    minute = today.getMinutes();

    PrintDate = " " + monthNames[today.getMonth()] + " " + date  + " " + hour +":"+ minute;
    document.getElementById('showDateCurrency').innerHTML = PrintDate;
    document.getElementById('showDateCommission').innerHTML = PrintDate;
}

