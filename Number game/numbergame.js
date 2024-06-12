const ch = 20;
const userch = [1, 2, 3, 4, 5];
won=false
for (let index in userch) {
    let k;
        k = prompt('Enter your number');
        console.log(k);
        if (k > ch) {
            console.log("You have chosen a big number. Choose a smaller one.");
        } else if (k < ch) {
            console.log("You have chosen a small number. Choose a bigger one.");
        } else if (k == ch) {
            console.log("You have chosen correctly! You win!!");
            won=true
            break
        }
        if(won){
            break
        }
    
}
if(!won){
console.log("Your chances are over!!! You lose.");
}

//random number
const secret=Math.floor(Math.random()*100)+1
console.log(secret)
chances=5
alert('welcome to the game')
won=false
while(chances>0){
   let k=parseInt(prompt('enter you guess number between 1-100'))
    if(k<1 || k>100){
        prompt('enter number in range of 1-100')
       
    }
    else if(k==secret){
        prompt('wow you guessed correctly !! you won')
        won=true
        break
    }
    else if(k<secret){
        prompt("you enters a smaller number enter larger one")
    }
    else{
        prompt("you entered a larger number enter smaller one")
    }
    chances--
}
if(won==false){
    prompt("Sorry! your attempts are over you loose!! the secret number is"+secret)
}


