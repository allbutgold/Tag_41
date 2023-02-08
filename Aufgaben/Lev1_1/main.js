class ball {
    constructor({ballType = 'regular'}) {
        this.ballType = ballType;
    }
    
}

ball1 = new ball("");
ball2 = new ball({ballType: "super"});

console.log(ball1.ballType);
console.log(ball2.ballType);