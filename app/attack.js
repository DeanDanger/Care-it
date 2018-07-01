class attack {
  
    constructor(attackLevel){
      this.attackLevel = attackLevel;
      attackLevel = 0;
    }

    get attackLevel() {
      return attackLevel;
    }
    
    set attackLevel(newAttackLevel){
      attackLevel = newAttackLevel;
    }
}