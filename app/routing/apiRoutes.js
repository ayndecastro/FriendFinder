let friendsSurveyData = require("../data/friends.js");

// console.log(friendsSurveyData);

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.json(friendsSurveyData);
    });

    app.post("/api/friends", function(req,res) {
        //console.log(req.body)
        let diffResult = [];
        let surveyee = req.body;
        if(friendsSurveyData >= 2){
            friendsSurveyData.forEach(function(x){
                let totalDiff = 0;
                for(i=0;i<surveyee.answer.length; i++){
                    let otherFriendSurvey = x.answer[i];
                    let currentSurveyee = surveyee.answer[i];
                    let diff = otherFriendSurvey - currentSurveyee;
                    totalDiff = Math.abs(diff);
                }
                diffResult.push(totalDiff)
            });

            let minDiff = Math.min.apply(null, diffResult);

            let Matches = [];

            for (i = 0; i<diffResult.length;i++){
                if(diffResult[i] === minDiff){
                    Matches.push(friendsSurveyData[i])
                }
            }

            res.json(matches);
        } else {
            res.json(friendsSurveyData);
        }

        friendsSurveyData.push(surveyee);
    });
};