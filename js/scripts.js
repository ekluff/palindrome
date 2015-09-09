var arraysEqual = function(a, b) {

  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i].toLowerCase() !== b[i].toLowerCase()) return false;
  };
  return true;
};

var palindrome = function(word) {
  var letters = word.split();
  var lettersReverse = letters.slice().reverse();

  return arraysEqual(letters, lettersReverse);
};

$(document).ready(function(){

});
