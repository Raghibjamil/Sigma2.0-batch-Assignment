class Temperature{
    constructor(){
        this.celcius=0;
        this.farenhite=32;
    }

    get getcelcius(){
        return this.celcius;
    }

    get getfarenhite(){
        return this.farenhite;
    }
    set setcelcius(temp){
        console.log(temp);
        if(typeof temp ==='number'){
        this.celcius=temp;
        this.farenhite= this.celcius * (9 / 5) + 32;
        }
    }

    set setfarenhite(temp){
        console.log(temp);
            if(typeof temp === 'number'){
                this.farenhite = temp;
      this.celcius = (this.farenhite - 32) * (5 / 9);
            }
        }
    }

const a=new Temperature();
console.log(`Intial celsius :- ${a.getcelcius}°C`);
console.log(`Intial Farenheit : ${a.getfarenhite}°F`)
a.setcelcius=25;
console.log(` celsius :- ${a.getcelcius}°C`);
console.log(` Farenheit : ${a.getfarenhite}°F`)
a.setfarenhite=68;
console.log(` celsius :- ${a.getcelcius}°C`);
console.log(` Farenheit : ${a.getfarenhite}°F`)

