// Curso POO SOLID 
class Smartphone {
    private color: string;
    private brand: string; //Propiiedades - atributos
    private _battery: number;
    //Una vez instanciada será parte del estado del objeto
    constructor(color: string, brand: string) {
        this.color = color;
        this.brand = brand;
        this._battery = 100;
    }
    makeAPhoneCall(): void {
        if (this._battery === 0) {
            throw "El celular no cuenta con la batería necesaria";
        }
        this._battery -= 10;
    }

    // getters Protege el estado puede ser con un setter o una función
    get battery(): number {
        return this._battery;
    }

    recharge() {
        this._battery = 100;
    }
}

let obj = new Smartphone('White', 'Iphone');
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();

// Public y private
// obj.color = 'Red';
// obj.brand = 'Android';

// herencia

class Android extends Smartphone {
    constructor(color: string) {
        super(color, 'Android');
    }
}
class IPhone extends Smartphone {
    constructor(color: string) {
        super(color, 'Iphone');
    }
}

let android = new Android('Red');
let iphone = new IPhone('White');
iphone.recharge();
iphone.makeAPhoneCall();
iphone.recharge();