export class Exercise {

    _id: String;
	name: String;
    description: String;
    muscles: string[]

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}

}