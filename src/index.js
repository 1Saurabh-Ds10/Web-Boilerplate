import "./css/reset.css";

const test = () => {
  const pre = document.createElement('pre');
  const code = document.createElement('code');
  code.innerText ='Hello World';
 
  pre.appendChild(code);
 

  document.body.appendChild(pre);
};

test();
