export class Trainingschedule {

    _id: String;
    user: String;
	name: String;
	days: [[]];

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}

}