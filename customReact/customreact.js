function customRender(reactElement, container){

    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    //  container.appendChild(domElement)

    const newElement = document.createElement(reactElement.type)
    newElement.innerHTML = reactElement.children
    for (const key in reactElement.props) {
        // if (key === "children") continue;
        newElement.setAttribute(key,reactElement.props[key])
    }
    container.appendChild(newElement)
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)