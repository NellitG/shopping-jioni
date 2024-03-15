// script.js
function addItem() {
    var itemInput = document.getElementById("counter");
    var burungo = itemInput.value.trim();
    
    if (burungo === "") {
      alert("Tafadhali weka burungo!");
      return;
    }
  


    var cart = document.getElementById("cart");
    var item = document.createElement("li");
    item.className = "item";
    item.innerHTML = `
      <span>${burungo}</span>
      <button onclick="removeItem(this)">Delete</button>
    `;
    cart.appendChild(item);
  
    itemInput.value = "";
  }
  
  function removeItem(kitu) {
    var item = kitu.parentElement;
    item.remove();
  }
  