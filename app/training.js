
import * as entity from "entity.js";
import {today} from "user-activity"; //today.local.steps to get steps


steps=today.local.steps;
class training{
     constructor(steps){
      this.steps = today.local.steps;
      steps = 0;
    }

  setInterval(function(){
  if(steps%1000==0){
  entity.levelUp();
  }
}, 10)

  setInterval(function(){
      if (steps%200==0){
      if (entity.getCurrentHP() != entity.getTotalHP()){
        entity.setCurrentHP(entity.getCurrentHP() + 1);
        }
    }
    }, 10);
}
