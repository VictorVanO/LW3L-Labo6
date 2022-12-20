class Formation {
    constructor(name, price, start, end) {
        this.name = name;
        this.price = price;
        this.start = start;
        this.end = end;
    }
}

class Panier {
    constructor(name, price, start, end, user) {
        this.name = name;
        this.price = price;
        this.start = start;
        this.end = end;
        this.user = req.session.user;
    }   
}



module.exports = Formation;
module.exports = Panier;