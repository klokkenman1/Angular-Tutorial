export class Trainingschedule {

    _id: String;
    user: String;
	name: String;
	days: [ String[], String[], String[], String[], String[], String[], String[]];

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}

}