let jmena = [
    "Markéta",
    "Kateřina",
    "Júlia",
    "Lucie",
    "Aneta",
    "Veronika",
    "Petra",
    "Olga",
    "Naďa",
    "Nikola",
    "Eva",
    "Anísa",
    "Terezia",
    "Diana",
    "Anna",
    "Iva",
    "Denisa",
    "Zuzana",
    "Jana",
    "Martina",
    "Lenka",
    "Iveta",
    "Pavla",
    "Lucie",
    "Kamila",
    "Soňa"
];

let tazenaJmena = [];
<<<<<<< HEAD
=======
let points = document.querySelector(".points");
let score = 1;

>>>>>>> develop-2022

function tahnoutJmeno() {
    if (jmena.length === 0) {
        return;
    }
<<<<<<< HEAD
=======
   
>>>>>>> develop-2022

    // Generujeme náhodný index
    let vyherniIndex = Math.floor(Math.random() * jmena.length);

<<<<<<< HEAD
    let vyherniIndex = Math.floor(Math.random() * jmena.length);

    // Získáme výherní jméno na patřičném indexu
    let vyherniJmeno = jmena[vyherniIndex];

    let vyherniJmeno = jmena[vyherniIndex];

=======
    // Získáme výherní jméno na patřičném indexu
    let vyherniJmeno = jmena[vyherniIndex];

>>>>>>> develop-2022
    // Vyřadíme vylosované jméno z osudí
    jmena.splice(vyherniIndex, 1);

    // Výherní jméno si uložíme do pole k ostatním výherním
<<<<<<< HEAD
    tazenaJmena.push(vyherniJmeno);
<<<<<<< HEAD:main.js
    let vyherce = document.querySelector("#vyherka");
    vyherce.textContent = vyherniJmeno;

    let seznam = document.querySelector("#seznam");
    seznam.textContent = tazenaJmena;
    
=======

    let vyherce = document.querySelector('#vyherka');
    vyherce.innerHTML = vyherniJmeno;

    let seznamJmen = document.querySelector('#seznam');
    seznamJmen.innerHTML = tazenaJmena;
>>>>>>> 0522cdcef4205de17cde2d422ab3e34312778d00:vyvolavac.js
}
=======
    tazenaJmena.unshift(vyherniJmeno);


    let vyherce = document.querySelector('#vyherka');
    vyherce.textContent = vyherniJmeno;

    let seznam = document.querySelector('#seznam');
    seznam.textContent = tazenaJmena;
}

function skore() {
    points.innerHTML = score++;
  };

function restart() {
    document.location.reload();
  }
>>>>>>> develop-2022
