// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);

		this.handleToggle = this.handleToggle.bind(this);

		this.state = {
			visible: true,
			details: "This is how we do it"
		}

	}

	handleToggle() {
		this.setState((prevState) => {
			return {
				visible: !prevState.visible
			}
		})
	}

	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleToggle}>
					{this.state.visible ? "Hide Details" : "Show Details"}
				</button>
				{this.state.visible && <p>{this.state.details}</p>}
			</div>
		)
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// const state = {
// 	details: "This is how we do it",
// 	display: true
// }

// const onToggleDetails = () => {
// 	state.display = !state.display;
// 	renderTemp();
// }

// const app = document.getElementById("app");

// const renderTemp = () => {

// 	const template = (
// 		<div>
// 			<h1>Visibility Toggle</h1>
// 			<button onClick={onToggleDetails}>
// 				{state.display ? "Hide Details" : "Show Details"}
// 			</button>
// 			{state.display && <p>{state.details}</p>}
// 		</div>
// 	)

// 	ReactDOM.render(template, app);
// }

// renderTemp();