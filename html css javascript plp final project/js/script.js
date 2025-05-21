const eren = document.querySelector('.change');
const image = document.querySelector('.anime')

eren.addEventListener('click',() => {
    if (image.src="../assets/IMG-20241103-WA0008.jpg") {
         image.src="../assets/prompt_element_weights.jpg"
         
    } else if (image.src="../assets/prompt_element_weights.jpg") {
        image.src="../assets/IMG-20241103-WA0008.jpg";
        
    }
})

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
  
      if (name === "" || email === "") {
        alert("Please fill in all fields.");
        e.preventDefault();
      } else if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        e.preventDefault();
      }
    });
  });
  