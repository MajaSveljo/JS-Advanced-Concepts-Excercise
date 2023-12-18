const conan = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    console.log("THIS is: ", this);
    console.log(`${this.name} sings LA LA LA`);
  },
};

const btn = document.querySelector("#clickMe");
btn.addEventListener("click", conan.sing.bind(conan));
