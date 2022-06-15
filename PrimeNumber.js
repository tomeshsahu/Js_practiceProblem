let count=0;
let a=9;
for (let i = 1; i <= a; i++)
{
    if (a % i == 0)
    {
        count++;
    }
}
    if(count==2)
    {
        console.log(a+" is Prime Number\n");
        }
    else
    {
        console.log(a + " is Not Prime Number\n");
    }
