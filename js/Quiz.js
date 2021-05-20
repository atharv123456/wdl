class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("yellow");
    
    //call getContestantInfo( ) here
    Contestant.getPlayerinfo();
    

    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
      var displayCause=130;
      for(var plr in allContestants){
        var correctAns="2";
        if(correctAns===allContestants[plr].answer){
        fill("red")
      }
        else{
          fill("black");
        }
      
    }
displayCause+=30
text(allContestants[plr].name+":"+allContestants[plr].answer,250,displayCause);
    

    //write code to adD
   
    fill("black")
    textSize(20);
    text("contestant who have answered correctly their name has been highlighted in green color ",130,230)
  


    //write code to highlight contest who answered correctly
    for(plr in allContestants){
      var correctAns ="2";
      if(correctAns === allContestants[plr].answer){
        fill("Green")
      }
      else{
        fill("red")
      }
      }

  }

}
}

