import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root =ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <React.StrictMode>
   <App />
</React.StrictMode>
);

//Crea  ting A Function Based component
function First(){
    return <h1>This Is My first function based component </h1> 
}
const root1= ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<First />)
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
