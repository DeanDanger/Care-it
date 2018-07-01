class HP {
  
    constructor (totalHP, currentHP){
      this.totalHP = totalHP;
      this.currentHP = currentHP;
      totalHP = 0;
      currentHP = 0;
    }
  
    get totalHP(){
      return totalHP;
    }

    get currentHP(){
      return currentHP;
    }
  
    set totalHP(newTotalHP){
      totalHP = newTotalHP;
    }

    set currentHP(newCurrentHP){
      currentHP = newCurrentHP;
    }
}