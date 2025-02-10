import rererereact from '../rererereact';

/** @jsx rererereact.createElement */
const container = document.getElementById('root');

const updateValue = (e) => {
    rerender(e.target.value);
};

const rerender = (value) => {
    const element = (
        <div>
            <input onInput={updateValue} value={value} />
            <h2>Hello {value}</h2>
        </div>
    );
    console.log('Element structure:', element); // Add this line
    rererereact.render(element, container);
};

rerender('World');
