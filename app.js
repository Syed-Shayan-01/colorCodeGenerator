let code = document.getElementById("code");
let main = document.getElementById("main");
function hexColor() {
   let value = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
   let hexTag = "#";
   for (i = 0; i <= 5; i++) {
      hexTag += value[Math.floor(Math.random() * 16)];
   };
   main.style.backgroundColor = hexTag;
   code.innerHTML = hexTag;
   console.log(hexTag);
};


function rgbColor() {
   let redColor = Math.round(Math.random() * 255);
   let greenColor = Math.round(Math.random() * 255);
   let blueColor = Math.round(Math.random() * 255);

   let rgbBg = `rgb(${redColor}, ${greenColor}, ${blueColor})`;

   main.style.backgroundColor = rgbBg;
   code.innerHTML = rgbBg;
   console.log(rgbBg);
} ;

function rgbaColor(){
   let redColor = Math.round(Math.random() * 255);
   let greenColor = Math.round(Math.random() * 255);
   let blueColor = Math.round(Math.random() * 255);
   let alphaColor = +Math.random().toFixed(1) ;
   let rgbaBg =  `rgba(${redColor}, ${greenColor}, ${blueColor}, ${alphaColor})`;

   main.style.backgroundColor = rgbaBg;
   code.innerHTML = rgbaBg;
   console.log(rgbaBg);
};

function replaceColor(){
   main.style.backgroundColor = "";
   code.innerHTML = "";
}