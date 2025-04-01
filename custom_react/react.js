function customRender(reactElement,container)
{
    /*const domElement = document.createElement(reactElement.type);
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    domElement.innerHTML = domElement.children;*/
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = domElement.children;
    for(const prop in reactElement.props)
    {
        if(prop=='children')continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
        
    }
    
    container.appendChild(domElement);
}


const mainContainer = document.getElementById('root');
const ReactElement  = {
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blanck',
    },
    children:'Click me to visit google'
}


customRender(ReactElement,mainContainer);