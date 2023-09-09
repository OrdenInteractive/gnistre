const debugGnistreEngine = new Array<string>();

class Err {
	constructor(message: string) {
		console.error(`Gnistre Engine Error : ${message}`);
		debugGnistreEngine.push(message);
	}
}

class Warn {
	constructor(message: string) {
		console.warn(`Gnistre Engine Warning : ${message}`);
		debugGnistreEngine.push(message);
	}
}

class Log {
	constructor(message: string) {
		console.log(`Gnistre Engine : ${message}`);
		debugGnistreEngine.push(message);
	}
}

const Debug = {
	stack: () => {
		return debugGnistreEngine;
	},
	Error: Err,
	Warn,
	Log,
};

export default Debug;
