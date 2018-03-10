$( document ).ready(function() {
    console.log( "ready!" );
    startGame();
    $(document).on("click", ".crystalbutton", function(event){
        console.log(event)
        var target=$(event.currentTarget);
        var name= target.attr("class").replace(" crystalbutton","");
        console.log(name);
        var crystalValue=crystals[name];
        console.log(crystalValue);
        currentScore+=crystalValue;
        console.log(currentScore);
        $(".score-body").html(currentScore);
        stats();
    })
});

var currentScore=0;

var targetScore=0;

var crystals={
    crystal1:0,
    crystal2:0,
    crystal3:0,
    crystal4:0,

}

var wins=0;
var losses=0;


//calculate win or loss
function stats(){
    if (currentScore>targetScore){
        losses++;
        $(".loss").html(losses);
        startGame();
    }
    else if (currentScore==targetScore){
        wins++;
        $(".win").html(wins);
        startGame();
    }
}


//generates crystal values
function crystalNumber(){
    for (var key in crystals){
        crystals[key]=getRandomInt(1,12);
    }
    console.log(crystals)
}


//starts game, generates target score and inputs in panel
function startGame(){
    targetScore=getRandomInt(19,120);
    $(".target-body").html(targetScore);
    crystalNumber();
    currentScore=0;
    $(".score-body").html(currentScore);
}


//generates random number
function getRandomInt(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min)) + min;
    console.log(randomNumber);
    return randomNumber;
}