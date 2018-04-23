console.log("App.js is running!");

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the handas of a computer',
    options: ['One', 'Two']
};


const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    count += 1;
    renderApp();
}
const subtractOne = () => count -= 1;
const reset = () => count = 0;

const appRoot = document.getElementById('app');

const renderApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={subtractOne}>-1</button>
            <button onClick={addOne}>+1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderApp();
