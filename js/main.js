"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<div class="card" style="width: 300px;">';
    html += '<img src="images/coffee-music.png" width=236px height=236px class="card-img-top">';
    html += '<div class="card-body">';
    html += '<h5 class="order">' + coffee.id + '</h5>';
    html += '<h5 class="card-title text-white">' + coffee.name + '</h5>';
    html += '<p class="card-text">' + coffee.roast + '</p>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedUserTextCoffee = userTextCoffeeSelection.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (selectedRoast === "all" && coffee.name.toLowerCase().includes(selectedUserTextCoffee)){
            filteredCoffees.push(coffee);
        }
        else if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(selectedUserTextCoffee)) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeDisplay.innerHTML = renderCoffees(filteredCoffees);
}


function addCoffee(e){
// Allow a user to add a new coffe and roast to the list of coffees
    e.preventDefault();
    var selectedRoast = addNewRoast.value;
    var selectedUserTextCoffee = addNewCoffee.value.toLowerCase();
    var addNewCoffees ={id: coffees.length + 1, name: selectedUserTextCoffee, roast: selectedRoast};
    coffees.push(addNewCoffees);
    coffeeDisplay.innerHTML = renderCoffees(coffees)

}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var coffeeDisplay = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var submitNewButton = document.querySelector('#new-submit');
var roastSelection = document.querySelector('#roast-selection');
var userTextCoffeeSelection = document.querySelector('#coffee-selector');
var addNewCoffee = document.querySelector('#new-coffee-selector');
var addNewRoast = document.querySelector('#new-roast-selector');




coffeeDisplay.innerHTML = renderCoffees(coffees);


submitNewButton.addEventListener('click', addCoffee)
submitButton.addEventListener('click', updateCoffees);
userTextCoffeeSelection.addEventListener('keyup',updateCoffees);
