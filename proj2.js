const form = document.querySelector('form')

// this usecase will give you empty 
//  const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit' , function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = `Please enter a valid height ${height}`;
    }else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid weight ${height}`;
    }else{
        const bmi = (weight / ((height * height) /10000)).toFixed(2)

        let category = '';
        if (bmi < 18.6) {
            category = 'Underweight';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            category = 'Normal Range';
        } else {
            category = 'Overweight';
        }

        // Show BMI and category
        results.innerHTML = `<span>Your BMI is ${bmi} (${category})</span>`;
    }

})