class level{
  
  constructor(level){
    this.level = level;
    level = 0;
  }
  
  get level(){
    return level;
  }
  
  set level(newLevel){
      level = newLevel;
  }
}