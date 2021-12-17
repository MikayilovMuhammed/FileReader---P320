// console.log("Salam");

// setTimeout(() => {
//   console.log("P320");
// }, 0);

// console.log("Sagol");

// let interval = setInterval(() => {
//   console.log("This is interval");
// }, 4000);

// document.querySelector(".stop").addEventListener("click", () => {
//   clearInterval(interval);
// });

let uploadFile = document.querySelector("form i");

uploadFile.addEventListener("click", function () {
  this.nextElementSibling.click();
});

uploadFile.nextElementSibling.addEventListener("change", function (e) {
  const { files } = e.target;

  for (let file of files) {
    const fileReader = new FileReader();
    fileReader.onloadend = function (e) {
      const { result } = e.target;

      console.log(result, file);
      const img = document.createElement("img");
      img.setAttribute("src", result);
      const h2 = document.createElement("h2");
      h2.innerText = file.name;
      document.querySelector(".image-wrapper").append(img, h2);
    };
  }
});
