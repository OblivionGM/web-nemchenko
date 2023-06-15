function splitStringIntoPairs(str) {
  var pairs = [];
  var length = str.length;

  for (var i = 0; i < length; i += 2) {
    var pair = str.slice(i, i + 2);
    if (pair.length < 2) {
      pair = pair + '_';
    }
    pairs.push(pair);
  }

  return pairs;
}

function displayPairsAsList(pairs) {
  var listContainer = document.createElement('ul');

  pairs.forEach(function(pair) {
    var listItem = document.createElement('li');
    listItem.textContent = pair;
    listContainer.appendChild(listItem);
  });

  document.body.appendChild(listContainer);
}

var str1 = 'abc';
var str2 = 'abcdef';

var pairs1 = splitStringIntoPairs(str1);
var pairs2 = splitStringIntoPairs(str2);

displayPairsAsList(pairs1);
displayPairsAsList(pairs2);
