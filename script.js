var move = 0;
var val = "X";
var win = "";
var grid = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
var previndex = [];

game();

function undo(){
    if(previndex){
        var y = previndex.pop();

        grid[y] = -1;
        var y1 = y.toString();

        document.getElementById(y1).innerText = "";
        move--;
    }
}

function game(){
    var box = document.querySelectorAll(".box");
    box.forEach((ele)=>{
    ele.addEventListener("click", movemade);
});
}

function movemade(){
    if(move%2==0){
        val = "X";
    }
    else{
        val = "O";
    }
    if(!this.innerText){
        this.innerText = val;
        move+=1;
    }
    var id = parseInt(this.id);
    grid[id] = val;
    previndex.push(id);

    if(move > 4){
        win = check();
    }

    if(win){
        document.querySelector(".result").innerHTML = win + " has won the game !";
        var box = document.querySelectorAll(".box");
        box.forEach((ele)=>{
        ele.removeEventListener("click", movemade);
    });
    }
}

function won(i, j, k){
    const x = document.getElementById(""+i);
    const y = document.getElementById(""+j);
    const z = document.getElementById(""+k);

    x.style.backgroundColor = "black";
    x.style.color = "white";

    y.style.backgroundColor = "black";
    y.style.color = "white";

    z.style.backgroundColor = "black";
    z.style.color = "white";
}

function check(){
    if((grid[0] == grid[1] && grid[1] == grid[2])){
        if(grid[0] == "X"){
            won(0, 1, 2);
            return "X";
        }
        else if(grid[0] == "O"){
            won(0, 1, 2);
            return "O";
        }
    }
    if(grid[0] == grid[3] && grid[3] == grid[6]){
        if(grid[0] == "X"){
            won(0, 3, 6);
            return "X";
        }
        else if(grid[0] == "O"){
            won(0, 3, 6);
            return "O";
        }
    }
    if(grid[3] == grid[4] && grid[4] == grid[5]){
        if(grid[3] == "X"){
            won(3, 4, 5);
            return "X";
        }
        else if(grid[3] == "O"){
            won(3, 4, 5);
            return "O";
        }
    }
    if(grid[6] == grid[7] && grid[7] == grid[8]){
        if(grid[6] == "X"){
            won(6, 7, 8);
            return "X";
        }
        else if(grid[6] == "O"){
            won(6, 7, 8);
            return "O";
        }
    }
    if(grid[1] == grid[4] && grid[4] == grid[7]){
        if(grid[1] == "X"){
            won(1, 4, 7);
            return "X";
        }
        else if(grid[1] == "O"){
            won(1, 4, 7);
            return "O";
        }
    }
    if(grid[2] == grid[5] && grid[5] == grid[8]){
        if(grid[2] == "X"){
            won(2, 5, 8);
            return "X";
        }
        else if(grid[2] == "O"){
            won(2, 5, 8);
            return "O";
        }
    }
    if(grid[0] == grid[4] && grid[4] == grid[8]){
        if (grid[0] == "X"){
            won(0, 4, 8);
            return "X";
        }
        else if(grid[0] == "O"){
            won(0, 4, 8);
            return "O";
        }
    }
    if(grid[2] == grid[4] && grid[4] == grid[6]){
        if(grid[2] == "X"){
            won(2, 4, 6);
            return "X";
        }
        else if(grid[2] == "O"){
            won(2, 4, 6);
            return "O"
        }
    }

    if(move == 9 && !win){
        return "None";
    }
}