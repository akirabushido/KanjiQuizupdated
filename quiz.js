
var qAnda = [
  ["What is the kanji for 'both'?", "両"],
  ["What is the kanji for 'round'?", "丸"],
  ["What is the kanji for 'contend'?", "争"],
  ["What is the kanji for 'mingle'?",'交'],
  ["What is the kanji for 'other'?", "他"]
]
var score = 0;
var question;
var answer;
var ask;
var correct = [];
var wrong = [];



function print(message) {
  document.write(message);
}

function makeList( arr ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < arr.length; i += 1) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

for (var i = 0; i < qAnda.length; i ++) {
  question = qAnda[i][0];
  answer = qAnda[i][1];
  ask = prompt(question).toLowerCase();
 if ( ask === 'quit') {
  alert("Thank you for playing");
  break;
  } else if (ask === answer) {
    score += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  }
} 
if (score >= 1) {
  finalMessage = "<p><strong> You got " + score + " answers!</strong></p>";
  finalMessage += "<h2>The questions you got right were:</h2>";
  finalMessage += makeList(correct);
  finalMessage += "<h2>The questions you got wrong were:</h2>";
  finalMessage += makeList(wrong);
  print(finalMessage);
} else {
 noCorrectmessage = "<h2> Sorry you got no questions right</h2>";
 print(noCorrectmessage);
}
