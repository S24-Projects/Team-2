function displayInput() {
    var userInput = document.getElementById('user_input').value;
    var displayArea = document.getElementById('display_area');
    displayArea.innerHTML = "<p>Your input: " + userInput + "</p>";
  }
  