class Account{
    constructor(Accountholder,balance){
        this.Accountholder=Accountholder;
        this.balance=balance;
    }
    depositeamount=0;
    deposite(balance ){

        if(balance>0){
            this.depositeamount=this.depositeamount+balance;

            
            console.log(`this is your deposited amount:-${this.depositeamount}`)
        }
        else{
            console.log(`Invalid deposite amount , please enter positive amount`)
        }
       
      
       
    }
    withdrawl(balance){

        if(balance>0){
            this.depositeamount-=balance;

            console.log(`this is your withdrawl money:-${balance} \n this is your available balance :-${this.depositeamount}`);
        }
        else{
    

        console.log("Invalid  withdrawl amount");
        }
    }

    currentbalance(){
        console.log(`current balance of Account:- ${this.depositeamount}`);
    }

}
const n=new Account('raghib',100);
console.log(n)
n.deposite(500)
n.deposite(-100)
n.deposite(500)
n.currentbalance()
console.log(n);
n.withdrawl(100)
console.log(n);
n.withdrawl(-5)
console.log(n);
n.currentbalance()
console.log(n);