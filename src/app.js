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
            <h1>Neutrinos: {count}</h1>
            <button onClick={subtractOne}>-1</button>
            <button onClick={addOne}>+1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderApp();
