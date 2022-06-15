let min=1000, max=0;
for(let i=1;i<=6;i++)
{
    let number = Math.floor((Math.random()+1)*100);
    console.log(number);
    if(min>number)
    {
        min=number;
    }
    if(max<number)
    {
        max=number;
    }
}
console.log("it is a minimum Number"+" "+min);
console.log("it is a Maximum Number"+" "+max);
