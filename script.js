const container = document.querySelector("#container");
const targetImg = document.querySelector("#targetIMG");

const kepek = ["delfin.png", "kutya.webp", "macska.jpg"];

for (const kep of kepek) {
  const img = document.createElement("img");
  img.src = "img/" + kep;
  container.appendChild(img);
  img.width = "200";
  img.addEventListener("click", function () {
    targetImg.src = img.src;
  });
}
