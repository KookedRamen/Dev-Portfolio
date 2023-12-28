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

  function displayActivity(activities) {
    var activity = document.getElementById("activity");
    activity.innerHTML = "<h2>Activity:</h2>";
    activity.innerHTML += "<p><strong></strong> " + activities.activity + "</p>";
    activity.innerHTML += "<p><strong>Type:</strong> " + activities.type + "</p>";
    activity.innerHTML += "<p><strong>Participants:</strong> " + activities.participants + "</p>";
    
  }