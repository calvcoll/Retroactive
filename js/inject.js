$(document.body).ready(function() {
    if (location.href.indexOf("inbox") >= 0) {
        var typedName = "";
        var refreshAnswerBoxes = function() {
            var questions = $('.inbox-box');
            var question_users = $('.answerbox--question-user');
            for (var i=0; i<questions.length; i++) {
                var question = questions[i];
                var question_user = question_users[i];

                var user = question_user.innerText.split('asked')[0];
                console.log(user);

                if (user.toLowerCase().indexOf(typedName.toLowerCase()) >= 0) {
                    $(question).show();
                }
                else {
                    $(question).hide(400);
                }
            }
        };

        var authorForm = $('.form-control#author');
        authorForm.keypress(function(event){
            typedName = event.currentTarget.value + String.fromCharCode(event.keyCode);
            //console.log(typedName + " press");
            refreshAnswerBoxes();
        });

        authorForm.keyup(function(event){
            if (event.keyCode == 8) {
                //typedName = typedName.split(typedName[typedName.length-1])[0];
                typedName = event.currentTarget.value;
                //console.log(typedName + " down");
                refreshAnswerBoxes();
            }
        });
    }
});