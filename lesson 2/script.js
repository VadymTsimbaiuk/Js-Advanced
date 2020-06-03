//let x = Math.floor(Math.random() * 60) + 1
class Human{
    constructor(data){
        this.name = data.name;
        this.secondName = data.secondName;
        this.weight = data.weight;
        this.skin_color = data.skin_color;
        this.age = data.age;
        this.sex = data.sex;
    }
    getDetails(){
        console.log(`This human name ${this.name} and secondname ${this.secondName}, also
        he's a ${this.skin_color}, he's a ${this.age} years old,
        he's weight: ${this.weight}, and he's sex is ${this.sex}`)
    }
}
class Man extends Human{
    constructor(data){
        super(data)
        this.sex = 'man';
    }
    manGetDetails(){
        this.getDetails();
        console.log(`sex: ${this.sex}`);
    }
}
class Woman extends Human{
    constructor(data){
        super(data)
        this.sex = 'woman';
    }
    womanGetDetails(){
        this.getDetails();
        console.log(`sex: ${this.sex}`);
    }
}
class Librarian extends Woman{
    constructor(data){
        super(data);
        this.introduced_tickets = 0;
    }
    oneMoreVisitor(){
        console.log(`New visitor!`);
        this.introduced_tickets +=1;
    }
    visitors(){
        console.log(`In this months were isuued ${this.introduced_tickets} visitor tickets`);
    }
}
class Nurse extends Woman{
    constructor(data){
        super(data);
        this.patients = 0;
    }
    oneMorePatient(){
        console.log(`Oh no, the new patient!`);
        this.patients +=1;
    }
    patientsHealing(){
        console.log(`In this months were healing ${this.patients} patients`);
    }
}
class Hunter extends Man{
    constructor(data){
        super(data);
        this.hunted_animals = 0;
    }
    сaught(){
        console.log(`We have сaught new animal`);
        this.hunted_animals +=1;
    }
    сaughtAnimals(){
        console.log(`We have сaught ${this.hunted_animals} on this months`);
        
    }
    
}
class Worker extends Man{
    constructor(data){
        super(data);
        this.made_parts = 0;
    }
    details(){
        console.log(`I made new detail today`);
        this.made_parts +=1;
    }
    madeDetails(){
        console.log(`I made ${this.made_parts} on this months`);
        
    }
}




class Animal{
    constructor(data){
        this.walking = data.walking;
        this.runing = data.runing;
        this.with_wool = data.with_wool; 
        this.name = data.name;
    }
    getAminalDetails(){
        console.log(`This animal has name: ${this.name}, with wool or not: ${this.with_wool},
         he like walking: ${this.walking}, or he like running: ${this.runing}`)
    }
}
class Herbivorous extends Animal{
    constructor(data){
        super(data);
        this.type = 'Herbivorous'
    }
    details(){
        this.getAminalDetails();
        console.log(`this animal is: ${this.type}`)
    }
}
class Predatos extends Animal{
    constructor(data){
        super(data);
        this.type = 'Predator'
    }
    details(){
        this.getAminalDetails();
        console.log(`this animal is: ${this.type}`)
    }
}

const Zoo = (function(){
let hunter = new Hunter({
 name: `Ivan`,
 secondName:`Petrov`,
 age: '21',
 skin_color:`black`,
 weight:`91`,
 sex:`man`
});
let worker = new Worker({
    name: `Petro`,
 secondName:`Ivanov`,
 age: '21',
 skin_color:`white`,
 weight:`55`,
 sex:`man`
});
let librarian = new Librarian({
    name: `Victoria`,
 secondName:`Stepanova`,
 age: '21',
 skin_color:`white`,
 weight:`75`,
 sex:`woman`
});
let nurse = new Nurse({
    name: `Stepanina`,
 secondName:`Petrova`,
 age: '21',
 skin_color:`black`,
 weight:`45`,
 sex:`woman`
});

let herbivorous1 = new Herbivorous({
    walking: true, 
    runing: false,
     with_wool: true, 
     name: `cow Marysia`
});
let herbivorous2 = new Herbivorous({
    walking: false, 
    runing: true,
    with_wool: true, 
    name: `Horse Evgen`
})
let herbivorous3 = new Herbivorous({
    walking: false, 
    runing: false,
     with_wool: false, 
     name: `pig Serg`
});

let predator1 = new Predatos({
    walking: true, 
    runing:true,
     with_wool: true, 
     name: `cat Flash`
})
let predator2 = new Predatos({
    walking: true, 
    runing:true,
     with_wool: true, 
     name: `Tiger Porshe`
})
let predator3 = new Predatos({
    walking: true, 
    runing:true,
     with_wool: true, 
     name: `Panter Henhel`
})
function zooLive(){
    console.log('Zoo live');
    hunter.manGetDetails();
    hunter.сaught(`cow`);
    hunter.сaughtAnimals(5);
    worker.manGetDetails();
    worker.details('door in the room')
    worker.madeDetails();
    librarian.womanGetDetails();
    librarian.oneMoreVisitor('we have new wisitor');
    librarian.visitors()
    nurse.womanGetDetails();
    nurse.oneMorePatient('cat is ill');
    nurse.patientsHealing();
    herbivorous1.getAminalDetails();
    herbivorous2.getAminalDetails();
    herbivorous3.getAminalDetails();
    predator1.getAminalDetails();
    predator2.getAminalDetails();
    predator3.getAminalDetails();
}
return {
    zooLive:zooLive
}
})();
Zoo.zooLive()