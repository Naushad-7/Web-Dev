class human {
    // properties

    age = 25;
    #wt = 50;
    ht = 150;


    // constructor ..............................

    constructor(newAge, newheight, newweight)
    {
        this.age = newAge;
        this.ht = newheight;
        this.#wt = newweight;
    }


    // behaviour

     gretting()
    {
        console.log("Hello tony stark How are you,  his weight is =", this.#wt);
    }

    walking()
    {
        console.log("He use his armour to fly he walk barely");
    }

    get fetchweigth()
    {
       return this.#wt;
    }

    set modifyweight(val)
    {
      return  this.#wt = val;
    }

}



let obj = new human(30, 150, 50);
// console.log(obj.age);
// console.log(obj.get);

console.log(obj);
console.log(obj.fetchweigth);
obj.gretting();
obj.walking();