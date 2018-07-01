class entity {
  
  constructor(name, sprite, HP, attack, defense, speed, level){
    this.name = name;
    this.sprite = sprite;
    this.HP = new HP();
    this.attack = new attack();
    this.defense = new defense();
    this.speed = new speed();
    this.level = new level();
    sprite = "small seed";
  }
  
  get name(){
    return name;
  }
  
  get sprite(){
    return sprite;
  }
  
  set sprite(newSprite){
    sprite = newSprite;
  }
  
  levelUp(selectedStat){
    if (entity.getLevel() < 10){
     entity.setLevel(entity.getLevel() + 1);
     if(selectedStat=="Attack")  {
        entity.setAttackLevel(entity.getLevel()*10);
     }
     if (selectedStat=="Defense"){
     entity.setDefenseLevel(entity.getLevel()*10);
     }
     if(selectedStat=="HP"){
     entity.setTotalHP(entity.getLevel()*10);
     }
     if(selectedStat=="Speed"){
     entity.setSpeedLevel(entity.getLevel()*10);
     }
    }
    if (entity.getLevel() == 3){
      entity.setSprite("fat seed");
    }
    if (entity.getLevel() == 4){
      entity.setSprite("hatching seed");
      import document from "document"
      let myanimation = document.getElementById("myanimation")
      myanimation.animate("enable");

    }
    if (entity.getLevel() == 5){
      entity.setSprite("plant");
    }
  }
}