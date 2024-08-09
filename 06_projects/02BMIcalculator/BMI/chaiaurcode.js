const form = document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value)
//the above usecase will give you empty value

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const results2 = document.querySelector('#results2');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  } else {
    const bmi = weight / ((height * height) / 10000).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results2.innerHTML = 'You are under weight';
    } else if (bmi > 18.6 && bmi < 24.9) {
      results2.innerHTML = 'You are normal';
    } else {
      results2.innerHTML = 'You are over weight';
    }
  }

  // var bmi = parseInt(document.querySelector('#results').value)
  // // console.log(bmi);
  // const state = document.querySelector('#statement')
  // if (bmi < 18.6) {
  //     state.innerHTML = "You are under weight"
  // }
  // else if (bmi > 18.6 && bmi < 24.9) {
  //     state.innerHTML = "You are normal"
  // }
  // else{
  //     state.innerHTML = "You are over weight"
  // }
});
