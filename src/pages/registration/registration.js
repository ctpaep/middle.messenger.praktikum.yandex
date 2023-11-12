import './registration.scss'

const myForm = document.getElementById('myForm')
myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(myForm);
    let a = formData.values()
    console.log("Submit")
});
