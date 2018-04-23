'use strict';

console.log("App.js is running!");

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the handas of a computer',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var count = 0;
var addOne = function addOne() {
    count += 1;
    renderApp();
};
var subtractOne = function subtractOne() {
    return count -= 1;
};
var reset = function reset() {
    return count = 0;
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: subtractOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderApp();
