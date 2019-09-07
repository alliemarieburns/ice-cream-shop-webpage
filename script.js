var randomIceCreamFlavor = [
    "Vanilla",
    "Chocolate",
    "Strawberry",
    "Neopolitan"
  ];

var randomSyrupFlavor = [
    "Hot Fudge",
    "Marshmallow",
    "Strawberry",
    "Peanut Butter"
];

var randomSprinkleFlavor = [
    "Chocolate",
    "Rainbow"
];

function showFlavor() {
    document.getElementById("iceCreamButton").addEventListener("click", () => {
    var randFlavorIceCream =
      randomIceCreamFlavor[Math.floor(Math.random() * randomIceCreamFlavor.length)];
    document.getElementById("iceCreamFlavor").innerHTML = randFlavorIceCream;
  });
}

function showSyrup() {
  document.getElementById("syrupButton").addEventListener("click", () => {
    var randSyrup =
    randomSyrupFlavor[Math.floor(Math.random() * randomSyrupFlavor.length)];
    document.getElementById("syrupFlavor").innerHTML = randSyrup;
  });
}

function showSprinkles() {
    document.getElementById("sprinkleButton").addEventListener("click", () => {
      var randSprinkle =
      randomSprinkleFlavor[Math.floor(Math.random() * randomSprinkleFlavor.length)];
      document.getElementById("sprinkleFlavor").innerHTML = randSprinkle;
    });
  }

