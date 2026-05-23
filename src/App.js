import React from 'react';
import themeimg from './themeimg.jpg';

function App() {
  const message = 'Hello, React!!!';
  const paragraph = 'This is a simple React application.';
  const name = 'vithusha';  


  const PI = 3.14159;
  const description = `The value of PI is approximately ${PI}.`;

  const theme = <img src={themeimg} alt="website" />;
  
  const  welcome =(props)= {  
    return <div> {props.childern}! </div>
  }
  return (
      <welcome> Welcome to React!
        <ul>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
</ul>  
         </welcome>
        <h1> {message} </h1>
        <hi>Hello {name}</hi>
        <p> {paragraph} </p>
        <p> {description} </p>
        {theme}
      </div>
  );

}

export default App;
