interface IUser { //Best practice to name interfaces
    profession: string;
    gotTowork(): void;
}
interface IExtraInformation { //Best practice to name interfaces
    phoneNumber: string;
    gotTowork(): void;
}

abstract class User {
    public profession: string;
    constructor(profession: string) {
        this.profession = profession;
    }
    goToWork(): void {

    }
}

class Doctor extends User implements IExtraInformation {
    constructor(phoneNumber: string) {
        super('Doctor');
        this.phoneNumber = phoneNumber;
    }
    phoneNumber: string;
}
class Police extends User {
    constructor() {
        super('Police')
    }
}

function printProfession(model: User): void {
    console.log(model.profession);
}
// function printProfession2(model: Police): void () {
//Duplicidad de código, ver que tienen en comun en este caso es IUser se resuelve a través de la interface
// }

let police = new Police(), doctor = new Doctor('9999');


printProfession(police);
printProfession(doctor);