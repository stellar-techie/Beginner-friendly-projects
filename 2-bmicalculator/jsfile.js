const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value); --> this will store an empty value
form.addEventListener('submit',function(e){
  e.preventDefault() //submit wala action roko
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results');//only an element
  if(height === ''||height<0||isNaN(height)){
    results.innerHTML = 'please enter a valid height value.';
  }
  //else--> results.innerHTML = `${height}`;
  else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML = 'please enter a valid value of weight';
  }
  else{
    const bmi = (weight/((height*height)/10000).toFixed(2));
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});