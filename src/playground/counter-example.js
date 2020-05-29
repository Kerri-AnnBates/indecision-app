// babel src/playground/counter-example.js --out-file=public/scripts/app.js --presets=env,react --watch

class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);

		this.state = {
			count: 0
		}
	}

	handleAddOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			}
		});
	}

	handleMinusOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			}
		})
	}

	handleReset() {
		this.setState(() => {
			return {
				count: 0
			}
		})
	}

	componentDidMount() {
		// Get data
		const storedCount = localStorage.getItem("count");

		// Parse data
		const count = parseInt(storedCount, 10);

		// Set state with data
		if (!isNaN(count)) {
			this.setState(() => ({ count }));
		}

	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) {
			localStorage.setItem("count", this.state.count);
		}
	}

	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>Reset</button>
			</div>
		)
	}
}

ReactDOM.render(<Counter />, document.getElementById("app"));

// alet count = 0;
// const addOne = () => {
// 	count++;
// 	console.log("Add 1");
// 	renderCounterApp();
// }

// const minusOne = () => {
// 	count--;
// 	console.log("Minus 1");
// 	renderCounterApp();
// }

// const reset = () => {
// 	count = 0;
// 	console.log("reset");
// 	renderCounterApp();
// }

// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
// 	const templateTwo = (
// 		<div>
// 			<h1>Count: {count}</h1>
// 			<button onClick={addOne}>+1</button>
// 			<button onClick={minusOne}>-1</button>
// 			<button onClick={reset}>Reset</button>
// 		</div>
// 	)
// 	ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();