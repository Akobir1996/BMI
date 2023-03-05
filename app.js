function calculateBmi(){
    const name = document.getElementById("name");
    const weightVal = document.getElementById("weight");
    const heightVal = document.getElementById("height");
    const result = document.querySelector("#result")
    // console.log(typeof weight.value);
    const weight = parseFloat(weightVal.value);
    const height = parseFloat(heightVal.value);

    let bmi = (weight/(height*height)).toFixed(2);
    // console.log(bmi);

    // result.innerHTML = `${name.value}ning BMI si ${bmi}`;
    if (bmi<=22){
        result.classList = "alert alert-success"
        result.innerHTML = `${name.value}ning BMI si ${bmi} Siz Ozg'insiz`;
    } else if (bmi>22 && bmi<=25){
        result.classList = "alert alert-primary"
        result.innerHTML = `${name.value}ning BMI si ${bmi} Siz O'rta vaznlisiz`;
    } else {
        result.classList = "alert alert-danger"
        result.innerHTML = `${name.value}ning BMI si ${bmi} Sizni Semizlik qiynayapti`;
    }
}



// function calculateBmi (a, b) {
// console.log(a + b);
// }
// function calculateBmi(name, weight, height){
//     let bmi = weight/(height*height);
//     // console.log(name + "ning BMI si " + bmi);
//     console.log(`${name}ning BMI si ${bmi}`)
// }

// calculateBmi("Akbar", 50, 1.5);
// calculateBmi("Amar", 60, 1.6);
// calculateBmi("Antoni", 70, 1.7);