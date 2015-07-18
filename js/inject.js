var onHead = function() {
    $(document.head).ready(function() {
        //Add RS Modified
        $(document.head).append("<link rel='stylesheet' href=\"" + chrome.extension.getURL('/css/retrospring-modified.css') + "\"/>");
    });
};
var onBody = function () {
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
                refreshAnswerBoxes();
            });

            authorForm.keyup(function(event){
                if (event.keyCode == 8) {
                    typedName = event.currentTarget.value;
                    refreshAnswerBoxes();
                }
            });
        }
    });
};

/* Loads on page change - required because of Rails partials */
var onload = function() {
    onHead();
    onBody();
};

$(document).on('page:load' ,function() {
    onload();
});

// Runs for first page load
onload();

/* End of on load stuffs */