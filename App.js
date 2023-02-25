import React from 'react';
import ReactDOM from 'react-dom/client'

// React CreateElement ==> Object 

/*
const heading1= React.createElement('h1',{
    id:'heading1',
    key:'1'
},"heading 1" );

const heading2= React.createElement('h1',{
    id:'heading2',
    key:'2'
},"heading no 2" );

const heading3= React.createElement('div',{
    id:'heading'
},[heading1,heading2] );  */


//JSX ?  -- Browser does not understand JSX . Babel knows about JSX syntax and 
//converts the code to broweser'compatible code
// JSX uses React.createElement-->Object==>HTML(DOM)
// Babel converts JSX to createElement source code

const Heading =()=>(
    <h1 id="name" key="h2"> Ashoo Jain</h1>
)

// React Componet 

// 1. Functional -New   2. Class based Component -old

// 1. Functional

// It's a normal JS function which return some piece of code or component or reactElement
// Name of component starts with capital letter -- Not Mandatory . Good Practice to use Capital Letter

const HeaderComponent=()=>(
    <div>
        <Heading />
        <h1>Learning Functional Component</h1>
        <h2>This is h2 tag</h2>
    </div>
)
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeaderComponent />);