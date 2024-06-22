abstract class User {
    private profession: string;

    constructor(profession: string) {
        this.profession = profession;
    }
    goToWork(): void {

    }
}


class Doctor extends User {
    constructor() {
        super('Doctor');
    }
}

class Police extends User {
    constructor() {
        super('Police')
    }
}

// let user = new User(); no se puede crear la instancia de una clase abstracta