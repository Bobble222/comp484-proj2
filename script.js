$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.restart-button').click(clickedRestartButton);
    $('.restart-button').hide();
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    let pet_info = {name:"Spot", weight:60, happiness:30};
    
  
    function clickedTreatButton() {
      if (pet_info.weight < 90) {
        pet_info.weight += 2;
        pet_info.happiness +=3;
        showModal("Your pet loved the treat!");
      }
      else {
        pet_info.weight += 2;
        pet_info.happiness -=1;
        showModal("Your pet is starting to feel bloated.");
      }
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      if (pet_info.weight > 50) {
        pet_info.weight -= 2;
        pet_info.happiness +=3;
        showModal("Your pet loved playing around!");
      }
      else {
        pet_info.weight -= 2;
        pet_info.happiness -=1;
        showModal("Your pet feels too tired to enjoy playing.");
      }
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      if (pet_info.weight > 50) {
        pet_info.weight -= 2;
        pet_info.happiness -=2;
        showModal("Your pet dutifully exercises with you!");
      }
      else {
        pet_info.weight -= 1;
        pet_info.happiness -=5;
        showModal("Your pet did not want to exercise.");
      }
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      if (pet_info.weight < 25 || pet_info.weight > 150) {
        gameOver();
      }
      else {
        animateDog();
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function showModal(message) {
    $("#modal-message").text(message);
    $("#overlay, #modal").show();
    }
    
    function gameOver() {
      showModal("Your pet has been confiscated for failing to take care of it. Game Over.");
      $('.treat-button').hide();
      $('.play-button').hide();
      $('.exercise-button').hide();
      $('.restart-button').show();
    }
    
    $("#modal-close").click(function() {
      $("#overlay, #modal").hide();
    });

    function clickedRestartButton() {
      $('.treat-button').show();
      $('.play-button').show();
      $('.exercise-button').show();
      $('.restart-button').hide();
      pet_info.weight = 60;
      pet_info.happiness = 30;
      checkAndUpdatePetInfoInHtml();
    }

      const dogA = `/^-----^\\
V  o o  V
 |  Y  |
  \\ W /
  / - \\
  |    \\     \\
  |     \\     )
  || (___\\====`;

      const dogB = `/^-----^\\
V  o o  V
 |  Y  |
  \\ W /
  / - \\
  |    \\       /
  |     \\     (
  || (___\\====`;

      let toggle = true;
      let intervalId;

      function getSpeed() {
        return 60000 / (pet_info.happiness);
      }

      function animateDog() {
        clearInterval(intervalId);


        intervalId = setInterval(() => {
          $('#dog').text(toggle ? dogA : dogB);
          toggle = !toggle;
        }, getSpeed());
      }

      animateDog();

      