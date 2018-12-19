/// Bussiness logic
var promoters = []

function Promoter(promoterName, eventName, eventLocation) {
  this.promoterName= promoterName;
  this.eventName = eventName;
  this.eventLocation = eventLocation;
  promoters.push(this);
}


// UI logic
$(document).ready(function() {
  // Promoter event submit button
  $("#eventSubmitForm").submit(function(event) {
    event.preventDefault();
    // debugger;
    var promoter1Name = $("#promoter1Name").val();
    var event1Name = $("#event1Name").val();
    var event1Location = $("#event1Location").val();
    var promoter1 = new Promoter(promoter1Name, event1Name, event1Location);
    $("#promoterDisplay").text(promoters[0].promoterName + " is hosting " + promoters[1].eventName + " at " + promoters[2].eventLocation + ". Come one, come all!").show();
    $(".eventTimeline").show();
  });

});
