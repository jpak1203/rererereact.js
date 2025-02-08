// Creating our own React.createElement function
const createElement = (type, props, ...children) => {
    return {
        type,
        props: {
            ...props,
            children: children.map((child) => (typeof child === 'object' ? child : createTextElement(child))),
        },
    };
};

// this is just a helper fn to render text inside an element.
// react actually does not do this, this is just to simplify.
const createTextElement = (text) => {
    return {
        type: 'TEXT_ELEMENT',
        props: {
            nodeValue: text,
            children: [],
        },
    };
};

// creating our own render fn
const render = (element, container) => {
    // determine if the element we are appending is text or a specified element node
    const dom = element.type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(element.type);

    // setting props to the element
    Object.keys(element.props)
        .filter((key) => key !== 'children')
        .forEach((name) => {
            dom[name] = element.props[name];
        });

    // recursively append children
    element.props.children.forEach((child) => {
        return render(child, dom);
    });

    container.appendChild(dom);
};

const rererereact = {
    createElement,
    render,
};

export default rererereact;
