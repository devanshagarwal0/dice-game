function play(){
    var p1=Math.floor((Math.random())*6);
    var p2=Math.floor((Math.random())*6);
    document.querySelector(".img1").setAttribute("src",`images/dice${p1+1}.png`);
    document.querySelector(".img2").setAttribute("src",`images/dice${p2+1}.png`);

    if(p1>p2){
        document.querySelector("h1").innerHTML = "Player 1 wins"
    }
    else if(p2>p1){
        document.querySelector("h1").innerHTML = "Player 2 wins"
    }
    else{
        document.querySelector("h1").innerHTML = "its tie"
    }
}
