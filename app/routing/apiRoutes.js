let friendsSurveyData = require("../data/friends.js");

console.log("apiRoutes connected");


module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.json(friendsSurveyData);
    });

    app.post("/api/friends", function(req,res) {

        surveyee = {
            name: req.body.name,
            image: req.body.image,
            answer: req.body.answer
          };

        // console.log(surveyee);


        let friendName;
        let friendImage;
        let totalDifference = 100;

        for(i=0; i < friendsSurveyData.length; i++){

            // console.log(friendsSurveyData[i])
            // console.log(JSON.stringify(friendsSurveyData[i]));

            let difference = 0;
                let answerForLoop = surveyee.answer;
            for(x=0; x < answerForLoop.length; x++){
                difference +=Math.abs(friendsSurveyData[i].answer[x] - answerForLoop[x])
            }

            if(difference < totalDifference){
                totalDiff = difference;
                friendName = friendsSurveyData[i].name;
                friendImage = friendsSurveyData[i].image;
            }
        }

        friendsSurveyData.push(surveyee);

        res.json({status: "OK", 
        friendName: friendName,
        friendImage:friendImage
        })
    });
};