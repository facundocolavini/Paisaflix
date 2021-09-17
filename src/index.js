import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function Hero(props){
  console.log(props);
/*   const title = props.title; */
const {title,content} = props;
  return(
    <div className="container">
      <div className="hero">
        <h1>{title}</h1>
        {content}
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
}
ReactDOM.render(<Hero title="Paisaflix" content="Paisaflix"/>, document.getElementById('root'));

