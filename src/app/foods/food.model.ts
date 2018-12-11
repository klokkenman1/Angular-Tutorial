export class Food {

    _id: String;
    user: String;
    name: String;
    date: String;
    energy: String;
    fat: String;
    carbohydrate: String;
    fibre: String;
    protien: String;
    salt: String;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}