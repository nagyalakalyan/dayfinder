function findday(){
var inputdate=document.getElementById('inputdate').value;
var inputmonth=document.getElementById('inputmonth').value;
var inputyear=document.getElementById('inputyear').value;
var date=new Date(inputyear,inputmonth-1,inputdate);
console.log(date);
var v1=date.getDay();
var result;
if(inputdate<=0 || inputmonth<=0 || inputmonth>12 || inputdate>=32)
{
    document.getElementById('output').innerHTML="please enter valid date";
}
else if(inputdate==30 && inputmonth==10 && inputyear==2001)
{
    document.getElementById('output').innerHTML="Hi HARSHAVARDHAN BATTU "
}
else{
switch(v1)
{
    case 0:result="Sunday";break;
    case 1:result="Monday";break;
    case 2:result="Tuesday";break;
    case 3:result="Wednesday";break;
    case 4:result="Thursday";break;
    case 5:result="Friday";break;
    case 6:result="Saturday";break;
}
console.log(result);
document.getElementById('output').innerHTML=result;
}
}