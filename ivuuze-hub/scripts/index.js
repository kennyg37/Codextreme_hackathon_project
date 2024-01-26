/*const scriptURL = 'https://script.google.com/a/macros/alustudent.com/s/AKfycby50_BfBVnxiAsSdMvWQFD4oFldco33liCdW62S-qI1yLwOrF4SZeKIwImJWquHv3esFQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg") 

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML =""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})*/

document.getElementById('openSignupModal').addEventListener('click', function() {
    document.getElementById('signupModal').style.display = 'block';
});
function closeModal() {
    document.getElementById('signupModal').style.display = 'none';
}

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('signupModal')) {
        closeModal();
    }
});
document.getElementById('openSignupModal2').addEventListener('click', function() {
    document.getElementById('signupModal').style.display = 'block';
});
function closeModal() {
    document.getElementById('signupModal').style.display = 'none';
}

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('signupModal')) {
        closeModal();
    }
});
