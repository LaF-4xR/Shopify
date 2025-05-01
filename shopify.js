const modal = document.getElementById("size-chart-modal");
const btn = document.getElementById("size-chart-btn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const quantityInput = document.querySelector('.quantity-input input[type="number"]');
const plusBtn = document.querySelector('.quantity-btn.plus');
const minusBtn = document.querySelector('.quantity-btn.minus');

plusBtn.addEventListener('click', () => {
  quantityInput.value = parseInt(quantityInput.value) + 1;
});

minusBtn.addEventListener('click', () => {
  if (parseInt(quantityInput.value) > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
});

const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.classList.contains("active")) {
      button.classList.remove("active");
    } else {
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    }
  });
});
