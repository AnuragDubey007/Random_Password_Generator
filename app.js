


const lengthSlider = document.getElementById('lengthslider');
let sliderValue= document.getElementById('slidervvalue');

//when reload
sliderValue.textContent=lengthSlider.value;

lengthSlider.addEventListener("input",()=>{
    sliderValue.textContent=lengthSlider.value;
})






    const checkboxes = document.querySelectorAll('.box1');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            console.log('Checkbox clicked'); // Debugging statement
            const spanElement = checkbox.parentElement.querySelector('.material-symbols-outlined');
            if (spanElement.innerText === "radio_button_unchecked") {
                spanElement.innerText = "task_alt";
            } else {
                spanElement.innerText = "radio_button_unchecked";
            }
        });
    });
    
    const icons = document.querySelectorAll('.material-symbols-outlined');
    console.log(icons); // Debugging statement
    
    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            const checkbox = icon.parentElement.querySelector('.box1');
            if (checkbox && checkbox.checked) {
                icon.innerText = "radio_button_unchecked";
            } else {
                icon.innerText = "task_alt";
            }
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
            }
        });
    });








const generatePassword=(length,upperCase,lowercase,symbols,numbers)=>{
    console.log("Parameters:", length, upperCase, lowercase, symbols, numbers);
    let charset="";
    let string=""

    if(upperCase){
        charset+="ABCDEFGHIJKLMNOPQRASUVWXYZ";
    }
    if(lowercase){
        charset+="abcdefghijklmnopqrasuvwxyz";
    }
    if(symbols){
        charset+="@#$%^&*()_+~|}{[]<>?/-=";
    }
    if(numbers){
        charset+="0123456789";
    }

    for(let i=0;i<length;i++){
        string+=charset.charAt(Math.floor(Math.random()*charset.length));
    }
    console.log(string);
    return string;
     
}







// Generate password when "Generate Password" button is clicked
let generateBtn = document.getElementById("generatepassword");
let passwordField = document.getElementById("password");


generateBtn.addEventListener("click", () => {
    console.log("Generate password button clicked"); // Debugging statement
    let length = parseInt(lengthSlider.value); // Convert slider value to integer
    let upperCase = document.querySelector("#uppercase").checked;
    let lowercase = document.querySelector("#lowercase").checked;
    let symbols = document.querySelector("#symbols").checked;
    let numbers = document.querySelector("#numbers").checked;


    console.log("Length:", length); // Debugging statement
    console.log("Uppercase:", upperCase); // Debugging statement
    console.log("Lowercase:", lowercase); // Debugging statement
    console.log("Symbols:", symbols); // Debugging statement
    console.log("Numbers:", numbers); // Debugging statement

    let passwordGenerated = generatePassword(length, upperCase, lowercase, symbols, numbers);
    passwordField.value = passwordGenerated;

    console.log(passwordGenerated);
});



let copyIcon = document.getElementById("copy");

copyIcon.addEventListener("click", () => {
    if (passwordField.value !== "") {
        navigator.clipboard.writeText(passwordField.value);
        copyIcon.innerText = "select_check_box";
    }
});





// Debugging statements
console.log(lengthSlider);
console.log(checkboxes);

// Debugging statement for checkbox event listeners
checkboxes.forEach(checkbox => {
    console.log(checkbox);
});

// Debugging statement for password generation
console.log(generateBtn);
console.log(passwordField);
