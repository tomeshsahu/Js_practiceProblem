let year=2000;

if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0)
{
    console.log(year + " " + "is Leap Year");
}
else
{
    console.log(year + " " + "is Not Leap Year");
}