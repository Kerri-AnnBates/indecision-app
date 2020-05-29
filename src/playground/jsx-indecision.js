// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
const app = {
	title: "Indecision App",
	subtitle: "This is some info",
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = "";
		renderTemplate();
	}
}

const onRemoveAll = () => {
	app.options = [];
	renderTemplate();
}

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum]
	alert(option);
	renderTemplate();
}

const renderTemplate = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? "Here are you options" : "No options"}</p>
			<button onClick={onRemoveAll}>Remove All</button>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
			<ol>
				{
					app.options.map((option) => {
						return <li key={option}>{option}</li>;
					})
				}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById("app");
renderTemplate();