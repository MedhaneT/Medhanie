describe("Account Test", function(){
    let acc = new Account(1);

    it("Test getNumber of Account", function(){
        assert.equal(50, new Account(50).getNumber())
    })
    it("Test deposit of Account", function(){
        acc.deposit(200);
        assert.equal(200,acc.getBalance());
    })
    it("Test WithDraw of Account", function(){
        acc.withdraw(50);
        assert.equal(150, acc.getBalance())
    })
})

describe("Saving Account Test", function(){

    let saving=new SavingsAccount(2);

    it("Testing getInterest of SavingAccount", function(){
        assert.equal(5, saving.getInterest());
    });

    it("Testing setInterest of SavingAccount", function(){
        saving.setInterest(7);
        assert.equal(7, saving.getInterest());
    });

    it("Testing addInterest of SavingAccount", function(){
        saving.deposit(250);
        saving.addInterest();

        assert.equal(267.5, saving.getBalance());
    });

    it("Testing endOfMonth of SavingAccount", function(){
        assert.equal("Interest added SavingsAccount:"+ saving.getNumber() +" balance: "+ saving.getBalance() +"interest:"+ (saving.getBalance() * saving._interest / 100),saving.endOfMonth());
    });
})

describe("Checking Account Test", function(){
    let checking = new CheckingAccount(3);

    it("Test getOverdraft of ChekingAccount ", function(){
        assert.equal(500,checking.getOverdraft());
    });
    it("Test setOverdraft of checkingAccount",function(){
        checking.setOverdraft(750);
        checking.withdraw(500);
        assert.equal(250,checking.getOverdraft())
    });
    it("Testing endOfMonth of CheckingAccount", function(){
               
        assert.equal("Warning, low balance CheckingAccount: "+ checking.getNumber() +"balance: "+ checking.getBalance()+" overdraft limit:"+checking._overdraft, checking.endOfMonth());
    });
})

describe("Bank Test ", function(){
    let bank = new Bank();
    it("Test addAccount of Bank ", function(){
        assert.equal(1,bank.addAccount());
    })
    it("Test addSavingAccount of Bank ", function(){
        assert.equal(2,bank.addSavingAccount(6))
    })
    it("Test addChecking of Bank ", function(){
        assert.equal(3, bank.addChechingAccount(650))
    })
    
    it("Testing closeAccount of Bank", function(){
               
        assert.equal(2, bank.closeAccount(2));
    })
})