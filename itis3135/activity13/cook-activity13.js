$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "team.json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#team").html("");
            //iterate through json file, one time per member
            for (let i = 0; i < data.teammembers.length; i++) {
                //get member data
                let member = data.teammembers[i];
                //append member data to html file
                $("#team").append(
                    "<h3>" + member.name + "</h3>" +
                    member.title + "<br>" +
                    member.bio + "<br>"
                )
            }
        }
    });
});