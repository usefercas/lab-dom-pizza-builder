// Write your Pizza Builder JavaScript in this file.

const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
};

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
};

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
};

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((pepers) => {
    if (state.greenPeppers) {
      pepers.style.visibility = 'visible';
    } else {
      pepers.style.visibility = 'hidden';
    };

  });
};

function renderWhiteSauce() {
  const sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  };
};

function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else {
    crust.classList.remove('crust-gluten-free');
  };
};


function renderButtons() {
  const pepperoniButton = document.querySelector('.btn.btn-pepperoni');
  if (state.pepperoni) {
    pepperoniButton.classList.add('active');
  } else {
    pepperoniButton.classList.remove('active');
  };

  const mushroomsButton = document.querySelector('.btn.btn-mushrooms');
  if (state.mushrooms) {
    mushroomsButton.classList.add('active');
  } else {
    mushroomsButton.classList.remove('active');
  };

  const greenPeppersButton = document.querySelector('.btn.btn-green-peppers');
  if (state.greenPeppers) {
    greenPeppersButton.classList.add('active');
  } else {
    greenPeppersButton.classList.remove('active');
  };

  const whiteSauceButton = document.querySelector('.btn.btn-sauce');
  if (state.whiteSauce) {
    whiteSauceButton.classList.add('active');
  } else {
    whiteSauceButton.classList.remove('active');
  };


  const glutenFreeCrustButton = document.querySelector('.btn.btn-crust');
  if (state.glutenFreeCrust) {
    glutenFreeCrustButton.classList.add('active');
  } else {
    glutenFreeCrustButton.classList.remove('active');
  };
};



function renderPrice() {
  const priceList = document.querySelector('.panel.price ul');
  priceList.innerHTML = '';

  let totalPrice = basePrice;

  for (const ingredient in ingredients) {
    if (state[ingredient]) {
      const listItem = document.createElement('li');
      listItem.textContent = `$${ingredients[ingredient].price} ${ingredients[ingredient].name}`;
      priceList.appendChild(listItem);
      totalPrice += ingredients[ingredient].price;
    };
  };
  const totalPriceElement = document.querySelector('.panel.price strong');
  totalPriceElement.textContent = `$${totalPrice}`;
}

renderEverything();
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderMushrooms();
  renderButtons();
});
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderGreenPeppers();
  renderButtons();
});
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderWhiteSauce();
  renderButtons();
});
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderGlutenFreeCrust();
  renderButtons();
});


