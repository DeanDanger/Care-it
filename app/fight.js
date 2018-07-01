class fight {
  
  constructor(entity1, entity2){
    this.entity1 = entity1;
    this.entity2 = entity2;
    var offense;
    var defense;
  }
  
  fight(entity1, entity2){
   while(entity1.getCurrentHP() > 0 && entity2.getCurrentHP() > 0){
     if(entity1.getSpeedLevel() >= entity2.getSpeedLevel()){
       offense = entity1;
       defense = entity2;
     }
     else{
       defense = entity1;
       offense = entity2;
     }
     damageCalc(offense, defense);
     if (defense.getCurrentHP() < 1){
       break;
     }
     damageCalc(defense, offense);
   }
  }
  
  damageCalc(offense, defense){
    var damage;
    var evasion = Math.floor((Math.random() * 100) + 1);
    if (evasion <= entity.getSpeedLevel()){
      console.log("evasion");
    }
    else{
      damage = offense.getattackLevel() - .4*defense.getdefenseLevel();
      damage = Math.round(damage);
      defense.setCurrentHP(defense.getCurrentHP - damage);
    }
  }
}