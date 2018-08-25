//player objects
let characters = {
    "Pimp C": {
        name: "Pimp C",
        health: 120,
        attack: 8,
        background: $('.ipc').css('background', 'url(assets/images/pimp-c.jpg)'),
        counterAttack: 15
    },

    "Paul Wall": {
        name: "Paul Wall",
        health: 100,
        attack: 14,
        background: $('.ipw').css('background', 'url(assets/images/paul-wall.jpg)'),
        counterAttack: 5
    },

    "Fat Pat": {
        name: "Fat Pat",
        health: 150,
        attack: 8,
        background: $('.ifp').css('background', 'url(assets/images/fat-pat.jpg)'),
        counterAttack: 20
    },

    "Bun B": {
        name: "Bun B",
        health: 180,
        attack: 7,
        background: $('.ibb').css('background', 'url(assets/images/bun-b.jpg)'),
        counterAttack: 20
    }
};

let userChoose = false;
let gameBegin = false;
let player;
let computer;
let playerAttack;
let computerCounter;
let palyerHealth;
let computerHealth;
let computerDeathCounter = 0;


$("document").ready(function () {
    
    //name and health on html
    //PIMP C
    document.querySelector(".tpc").innerText = characters["Pimp C"].name;
    document.querySelector(".hpc").innerText = characters["Pimp C"].health;
    //PAUL WALL
    document.querySelector(".tpw").innerText = characters["Paul Wall"].name;
    document.querySelector(".hpw").innerText = characters["Paul Wall"].health;
    //FAT PAT
    document.querySelector(".tfp").innerText = characters["Fat Pat"].name;
    document.querySelector(".hfp").innerText = characters["Fat Pat"].health;
    //BUN B
    document.querySelector(".tbb").innerText = characters["Bun B"].name;
    document.querySelector(".hbb").innerText = characters["Bun B"].health;

    $('.gameChar').on("click", function () {
        //choosing the user character
        if (userChoose !== true) { //boolean statement to set a condition
            userChoose = true; //change the boolean to true so it won't go to this if statement
            player = $(this).find(".card-title").text();
            $(this).addClass('player'); // give that character a player class for target
            $(this).detach().appendTo('.playerSection'); //move this clicked character to the battle area
            playerAttack = characters[player].attack; //give playerAttack value for easy writting
            playerHealth = characters[player].health; //give playerHealth value for easy writting
            $(this).find(".health").addClass('playerhealth'); //add playerhealth class for easier target later

            //console.log(player);

            //choosing enemy character
        } else if (gameBegin !== true) {//boolean statement to set a condition
            gameBegin = true;//change the boolean to true so it won't go to this if statement
            computer = $(this).find(".card-title").text();
            $(this).addClass('computer'); // give that character a player class for target
            $(this).detach().appendTo('.computerSection'); //move this clicked character to the battle area
            computerCounter = characters[player].attack; //give computerAttack value for easy writting
            computerHealth = characters[computer].health; //give computerHealth value for easy writting
            $(this).find(".health").addClass('computerhealth'); //add playerhealth class for easier target later
            //console.log(computer);
        };
    })
    function removeRapper() { //function to remove the character from the battl
        $('.computer').addClass('dead').removeClass('.computer'); //add replace computer class with dead class for target for detach
        $('.dead').detach(); //remove the computer character
        $('.computertarget').append('<div class="computertarget mt-5" style="width: 18rem;">'); // make a new spot for the new chosen computer character to append to
    }
    function checkWin() { //function to give us the condition for winning the game
        if (computerDeathCounter === 3) { //if the computer character count is equal to 3, then you win
            alert('you win');
            // game win  window.location.href = "win.html";
        }
    }

    function spitUpdate() {
        if (playerHealth <= 0) { //if player health is equal or below 0, then you lose
            alert('GAME-OVER');
            //game over page window.location.href = "game-over.html";
        } else if (computerHealth <= 0) { //if computer health is equal or bellow 0, then you choose the next computer character
            computerDeathCounter++; //counter for checkwin function
            gameBegin = false; //setting the gameBegin to false, lets us choose another computer character
            computer = null; //removes the previous computer character from the variable of computer
            removeRapper(); //initiates removeRapper function
            checkWin(); //initiates checkwin function
        }
    }





    //fight sequence
    $(".spit").on('click', function () {
        if (player != null && computer != null) {

            computerHealth -= playerAttack; //deduct computerhealth with playerAttack points
            playerHealth -= computerCounter; //deduct playerhealth with computerCounter
            playerAttack += characters[player].attack; //adds playerAttack points by it's base everytime fight sequence is initiated
            document.querySelector('.playerhealth').innerText = playerHealth; //reflect player health to the html page
            document.querySelector('.computerhealth').innerText = computerHealth; //reflects computerhealth to the html page
            spitUpdate(); //executes spitUpdate function

            //console
            // console.log(playerHealth);
            // console.log("computer health" + computerHealth);
        }

    })



});
