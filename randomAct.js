$(document).ready(function() {
    $("#generateBtn").click(function() {
      fetchActivity();
    });
  });

  function fetchActivity() {
    $.ajax({
      url: "https://www.boredapi.com/api/activity",
      method: "GET",
      success: function(data) {
        displayActivity(data);
      },
      error: function(error) {
        console.log("Error:", error);
      }
    });
  }

  function displayActivity(activity) {
    var activityContainer = document.getElementById("activityContainer");
    activityContainer.innerHTML = "<h2>Activity:</h2>";
    activityContainer.innerHTML += "<p><strong>Name:</strong> " + activity.activity + "</p>";
    activityContainer.innerHTML += "<p><strong>Type:</strong> " + activity.type + "</p>";
    activityContainer.innerHTML += "<p><strong>Participants:</strong> " + activity.participants + "</p>";
    
  }