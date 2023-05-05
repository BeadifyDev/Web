document.getElementById("color2").addEventListener("input", function() {
    document.getElementById("priceText").innerHTML = "$" + this.value;
  });
  