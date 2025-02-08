import rererereact from '../lib/rererereact';

const element = rererereact.createElement(
    'div',
    { id: 'foo' },
    rererereact.createElement('a', null, 'bar'),
    rererereact.createElement('b'),
);

const container = document.getElementById('root');
rererereact.render(element, container);
