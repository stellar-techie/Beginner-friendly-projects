const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock');

// let date = new Date();
// console.log(date.toLocaleTimeString());--> this is not updated everytime so setinterval is used. a method for event control.
setInterval(function(){
  let date = new Date();
  console.log(date.toLocaleTimeString()); 
  clock.innerHTML = date.toLocaleTimeString();
},1000);
//1000 for 1 sec.