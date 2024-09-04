
/* app.js 
<div id="parent">
  <div id="child">
    <h1>Hello World From h1 tag</h1>
    <h2>Hello World From h2 tag</h2>
  </div>
  <div id="child2">
    <h1>Hello World From child2 from  h1 tag</h1>
    <h2>Hello World From child2 from h2 tag</h2>
  </div>
</div>


*/

// const heading = React.createElement("h1", {id:'heading'}, "Hello World From React"); // created h1 tag
// core react from react.development.js
const heading= React.createElement('div', {id:"parent"},
   [  React.createElement('div', {id: 'child'}, 
    [React.createElement('h1',{}, 'Hello World From h1 tag'),
      React.createElement('h2',{}, 'Hello World From h2 tag')
    ]),
    React.createElement('div', {id: 'child2'}, 
    [React.createElement('h1',{}, 'Hello World From child2 h1 tag'),
        React.createElement('h2',{}, 'Hello World From child2 h2 tag')
    ]
    )
   ]
)
console.log('heading', heading)
const root = ReactDOM.createRoot(document.getElementById('root')) // create the root inside react
// need to use reactDOM as we use the dom manipulations need to use react-dom.development.js
root.render(heading);