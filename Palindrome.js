
var reverse=0, rem;
let a=111;
let temp =a;
    while (a > 0)
    {
      rem = a % 10;
       reverse = reverse * 10 + rem;
        a = a / 10;
    }
    if(reverse==temp)
    {
        console.log("Palindrom");
    }
    else
    {
        console.log("Not Palindrome");
    }
