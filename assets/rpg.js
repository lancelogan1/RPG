//players object variables
let players = {
    "Pimp C": {
        name: "Pimp C",
        health: 120,
        attack: 8,
        imageUrl: "assets/images/pimp-c.jpg",
        counterAttack: 15
    },

    "Paul Wall": {
        name: "Paul Wall",
        health: 100,
        attack: 14,
        imageUrl: "assets/images/paul-wall.jpg",
        counterAttack: 5
    },

    "Fat Pat": {
        name: "Fat Pat",
        health: 150,
        attack: 8,
        imageUrl: "assets/images/fat-pat.jpg",
        counterAttack: 20
    },

    "Bun B": {
        name: "Bun B",
        health: 180,
        attack: 7,
        imageUrl: "assets/images/bun-b.jpg",
        counterAttack: 20
    }
};

let userPlayer = false;
let gameStart = false;
let user;
let enemy;


$("document").ready(function () {
    //name and health on html
    document.querySelector(".tpc").innerText = players["Pimp C"].name;
    document.querySelector(".hpc").innerText = players["Pimp C"].health;

    document.querySelector(".tpw").innerText = players["Paul Wall"].name;
    document.querySelector(".hpw").innerText = players["Paul Wall"].health;

    document.querySelector(".tfp").innerText = players["Fat Pat"].name;
    document.querySelector(".hfp").innerText = players["Fat Pat"].health;

    document.querySelector(".tbb").innerText = players["Bun B"].name;
    document.querySelector(".hbb").innerText = players["Bun B"].health;
    
    $('.gameChar').on("click", function(){
        if(userPlayer !== true){
            userPLayer = true;
            user = $(this).find(".card-title").text();
                   $(this).addClass('user');
            console.log(user);

        }if(gameStart !== true){
            gameStart = true;
            enemy = $(this).find(".card-title").text();
                    $(this).addClass('enemy');
            console.log(enemy);
        }
    })

   
});
