class Shelter {
    constructor() {
        this.dogs = [];
        this.cats = [];
    }
    enqueue(type) {
        if (type === 'dog') {
            this.dogs.push({type: 'dog', time: Date.now()});
        }
        if (type === 'cat') {
            this.cats.push({type: 'cat', time: Date.now()});
        }
    }
    dequeueDog(){
        return this.dogs.shift();
    }
    dequeueCat(){
        return this.cats.shift();
    }
    dequeueAny() {
        return this.dogs[0].time < this.cats[0].time ? this.dogs.shift() : this.cats.shift();
    }
}