setInterval(
        function()
        {
            let time=new Date();
            let second= time.getSeconds()*6;
            let minute= time.getMinutes()*6;
             let hour=  time.getHours()*30 + Math.round(minute/12);     
            document.getElementById("second-hand").style.transform="rotate("+ second +"deg)";
            document.getElementById("minute-hand").style.transform="rotate("+ minute +"deg)";
            document.getElementById("hour-hand").style.transform="rotate("+ hour +"deg)";
       },1000
    
); 