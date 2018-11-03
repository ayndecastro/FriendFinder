console.log('hello');
$(document).ready(function() {

    $(".submit").on("click", function(event){
        event.preventDefault();

        let newSurvey = {
            name: $(".name").val().trim(),
            image: $(".image").val().trim(),
            answer: [
                $(".q1").val().trim(),
                $(".q2").val().trim(),
                $(".q3").val().trim(),
                $(".q4").val().trim(),
                $(".q5").val().trim(),
                $(".q6").val().trim(),
                $(".q7").val().trim(),
                $(".q8").val().trim(),
                $(".q9").val().trim(),
                $(".q10").val().trim()
            ]
        };

        $.post("api/friends", newSurvey, function(data){
            // console.log(data);
            $(".modal").append(data);
            $(".modal").modal('open')
        })
    })




})