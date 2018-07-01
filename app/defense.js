class defense {
  
  constructor(defenseLevel){
    this.defenseLevel = defenseLevel;
    defenseLevel = 0;
  }
  
  get defenseLevel(){
    return defenseLevel;
  }
  
  set defenseLevel(newDefenseLevel){
      defenseLevel = newDefenseLevel;
  }
}