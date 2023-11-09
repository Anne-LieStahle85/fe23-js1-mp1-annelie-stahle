const rader = ["Rad 1", "Rad 2", "Rad 3", "Rad 4", "Rad 5"];

console.log(rader);
console.log(rader.length);

for (let i = 0; i < rader.length; i++) {
  const h2 = document.createElement("h2");
  document.body.appendChild(h2);
  console.log(rader[i]);

  h2.innerText = rader[i];

  const hue = 147 + i * 10;
  h2.style.backgroundColor = `hsl(${hue}, 60%, 80%)`;
  h2.style.innerText = hue;
  h2.style.color = `hsl(210, 58%, 55% )`;
  h2.style.textAlign = "center";
  h2.style.fontSize = 10 + 10 * i + "px";
  //h2.style.fontSize = "12px";

  //const h2El = document.querySelectorAll("h2");
  //let fontSize = 12;

  //for (let i = 0; i<h2El.length; i++){
  //  h2El[i].style.fontSize = fontSize + "px";
  //fontSize += 5;

  //}
}
//Här slutar rubrikerna
//Här börjar listorna

// if(i%2 == 0){
//   h2.style.fontSize = "12px"
//}
//här är en container i en div som dom 3 listorna ska ligga i
const container = document.createElement("div");
container.style.display = "flex";
container.style.justifyContent = "space-evenly"
document.body.appendChild(container);
container.style.border = "solid black";


//Här börjar block 1 med första listan

for (let i = 0; i < 3; i++) {
  const block = document.createElement("div");
  container.appendChild(block);
  block.style.border = "10px solid hsl(210, 58%, 55% )";
  block.style.margin = "40px";

  for (let j = 0; j <= 9; j++) {
    console.log(j);
    let p = document.createElement("p");
    p.textContent = j;
    p.style.width = "3rem";
    p.style.margin = "0";

    if (i == 1) {
      block.prepend(p);
      p.style.textAlign = "center"
    } else {
      block.appendChild(p);
    }

    if (j % 2) {
      p.style.backgroundColor = "black";
      p.style.color = "white";
    }

    if (i == 0 && j == 4) {
      p.style.backgroundColor = "hsl(210, 58%, 55% )";
      p.style.color = "white";
    } else if (i == 1 && j == 8) {
      p.style.backgroundColor = "hsl(210, 58%, 55% )";
      p.style.color = "white";
    }

    if(i == 2 ){
        const block3 = ["Ett", "Två", "Tre", "Fyra", "Fem", "Sex", "Sju", "Åtta", "Nio", "Tio"];
        p.textContent = block3[j];
        p.style.textAlign = "right"
        if(block3[j] == "Sex"){
            p.style.backgroundColor = "hsl(210, 58%, 55% )";
        }
    }
    

    

  
  }
}
