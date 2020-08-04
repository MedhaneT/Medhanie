class Bank {
    constructor() {
        this.account = [];
        this.nextNumber = 1;
    }

    addAccount(){
        this.account.push(new Account(this.nextNumber));
        return this.nextNumber++;
    }
    addSavingAccount(interest){
        let save = new SavingsAccount(this.nextNumber);
        save.deposit(1000);

        if(!interest){
            save.setInterest(interest)
        }
        this.account.push(save);
        return this.nextNumber++;
    }
     addChechingAccount(overdraft){
         let check = new CheckingAccount(this.nextNumber);

         check.deposit(100);
         if(!overdraft){
             check.setOverdraft(overdraft);
         }
         this.account.push(check);
         return this.nextNumber++;
     }
     closeAccount(number){
       
          delete this.account[number];
          return number;
      }
  
      accountReport(){
          for(let i=0; i<this.account.length;i++){
              console.log(this.account[i].toString());
          }
      }
  
      endOfMonth(){
         
          for(let i=0; i<this.account.length; i++){
              
              console.log(this.account[i].endOfMonth());
          }
                            
      }
  
      toString(){
          return "Accounts"+this.account;
      }
}