function useState(initial) {
	const state = [initial];

	const getValue = (_) => state[0];

	const useEffect = {
		observers: [],
		subscribe: function (fn) {
			this.observers.push(fn);
		},
		unsubscribe: function (fn) {
			this.observers = this.observers.filter(
				(subscrive) => subscrive !== fn,
			);
		},
		notify: function (data) {
			this.observers.forEach((observer) => {
				if (typeof observer === "function") observer(data);
			});
		},
	};

	const newValue = (newValue) => {
		state[0] = newValue;
		useEffect.notify({ oldValue: state[0], newValue });
	};

	return [getValue, newValue, useEffect];
}

const [cores, setCores] = useState( [] );
const [cores2, setCores2] = useState( [] );


let context = new AudioContext(),
oscillator = context.createOscillator(); 

oscillator.type = 'sine';
oscillator.connect(context.destination);
oscillator.start()

function handleNotify(data) {
	console.log(data);
	return listenerPrice.unsubscribe(handleNotify);
}

const [price, setPrice, listenerPrice] = useState("1.00");
listenerPrice.subscribe(handleNotify);
console.log(price());
setPrice("2.00");
console.log(price());
setPrice("2.00");

const [name, setName, listenerName] = useState("");
listenerName.subscribe(handleNotify);
setName("luan");

function css(string, ...values) {
	console.log(string.raw[0]);
	console.log(values);
}

// TODO fazer stylesheet do react componets
css`
	body: {
		display: block;
		margin-top: 15px;
		padding-left: 10px;
	}
`;

// const s = String.raw`
// body: {
// 	display: block;
// 	margin-top: 15px;
// 	padding-left: ${num};
// }
// `;

// console.log(s);
