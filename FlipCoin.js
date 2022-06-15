
let IsHead=1;
let headCount=0;
let tailCount=0;
let flipCoin=5;
for(let i=1;i<=flipCoin;i++)
{
    let Coin = Math.floor(Math.random()*10)%2;
    if(Coin==IsHead)
    {
        headCount++;
    }
    else
    {
        tail++;
    }
}
console.log("It is a Head "+" "+head);
console.log("it Is a Tail"+" "+tail);
var percentage=head*100/flipCoin;
console.log("Head Value percentage"+" "+percentage);