// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// This code here allows us to render an entire block of Bootstrap layout HTML

// It's especially important to notice two things:

// 1. That all of the bootstrap content was dumped into a single "main-container" div.
//    This can be named anything. But there must always be ONE single div that all of the HTML fits inside of.
// 2. All of the "class" keywords have been replaced by "className".
//    This is because "class" is a reserved keyword in JS.
ReactDOM.render(
  <div className="main-container">
    <h1>Hey guys! I'm a header!</h1>
    <h2>Things I like!</h2>
    <ul>
      <li>Peas</li>
      <li>Carrots</li>
      <li>Love</li>
    </ul>

  <div className="container">
    <div className="jumbotron">
      <h1>Aww yeah Jumbotron!</h1> 
      <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing
      responsive, mobile-first projects on the web.</p> 
    </div>

    <p>Text on paragraph one</p> 
    <p>Paragraph two text here</p> 
  </div>
  </div>
  , document.getElementById("app")
);