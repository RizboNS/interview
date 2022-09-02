const url = "https://dog.ceo/api/breeds/image/random";

async function getDogs() {
  count = document.getElementById("count").value;
  const dogImages = [];
  for (let i = 0; i < count; i++) {
    const response = await (await fetch(url)).json();
    const imagUrl = response.message;
    dogImages.push(imagUrl);
  }
  dogImages.forEach((image) => {
    const imgEl = document.createElement("img");
    imgEl.src = image;
    document.getElementById("image-container").appendChild(imgEl);
  });
}
