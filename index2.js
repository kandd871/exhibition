const button = document.getElementById('add');
const input = document.getElementById('user-data');
const info = document.getElementById('i');
const about = document.getElementById('about');
const box = document.querySelector('.box');
const infoBox = document.getElementById('info');
const link = document.getElementById('link');
const title = document.getElementById('title');
const a = document.querySelector('a')
var logos = document.querySelectorAll('#logo .st0');

    const symbol = document.getElementById('symbol').value;
    const color = document.getElementById('color').value;
    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const age = parseInt(document.getElementById('age').value);


button.addEventListener("click", function(){
    if (name === '' || color === '' || symbol === '' || age === '' || location === '') {
        // Display an error message or provide feedback to the user
        alert('Please fill in all fields before adding.');
    } else {
        // If all fields are filled, proceed with adding the document
        input.style.height = "0px";
        input.style.paddingTop = "0px";
        input.style.paddingBottom = "0px";
        input.style.border = "none";
        document.body.style.background = "#EE3333";
        box.style.border = "1px dotted #FFF8EB";
        infoBox.style.border = "1px dotted #FFF8EB";
        infoBox.style.background = "#EE3333";
        infoBox.style.color = "#FFF8EB";
        link.style.color = "#FFF8EB";
        a.style.color = "#FFF8EB";
        title.style.color = "#FFF8EB";
        title.style.border = "1px dotted #FFF8EB";
        logos.forEach(function(logo) {
        logo.style.fill = '#FFF8EB'; 
          });
    }

})

info.addEventListener("mouseenter", function(){
about.classList.add('show');
})

info.addEventListener("mouseleave", function(){
    about.classList.remove('show');
    })