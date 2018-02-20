const myArray = ['rock', 'paper', 'scissors'];

imageClick = function(event) {
    var cell = event.target;
    var rand="";
    do{
       rand = myArray[Math.floor(Math.random() * myArray.length)];
    }while (cell.id==rand);
    document.getElementById("p1").textContent="Your choice is "+cell.id;
    document.getElementById("p2").textContent="Computers choice is "+rand;
    
    var winner = compareSelection(cell.id,rand);
    
    document.getElementById("p3").textContent=winner+" won!!!";
    console.log(rand);
    console.log(cell.id);
}

function compareSelection(player,computer){
    console.log("player--",player);
    console.log("computer--",computer);
    
    if (player=="rock" && computer=="paper"){
        return "Computer";
    }else if (player=="rock" && computer=="scissors"){
        return "Player";
    }else if (player=="paper" && computer=="rock"){
        return "Player";
    }else if (player=="paper" && computer=="scissors"){
        return "Computer";
    }else if (player=="scissors" && computer=="rock"){
        return "Computer";
    }else if (player=="scissors" && computer=="paper"){
        return "Player";
    }
}
document.getElementById("rock").addEventListener('click', imageClick);
document.getElementById("paper").addEventListener('click', imageClick);
document.getElementById("scissors").addEventListener('click', imageClick);
