console.log("i like coding");

                   
function checkStrength() {
     const password = document.getElementById('password').value;
     const strength = document.getElementById('strength');

     if (password.length < 6) {
         strength.textContent = "Strength: Weak (too short)";
          strength.style.color = "red";
         } else if (password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[@$!%*?&#]/)) {
            strength.textContent = "Strength: Strong";
             strength.style.color = "green";
         } else {
            strength.textContent = "Strength: Moderate (add numbers, special characters, and mix cases)";
            strength.style.color = "orange";
            }
  }