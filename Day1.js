const fs = require('fs');

fs.readFile('calList.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Break the string down into arrays.
  var listArray = data.split("\r\n");
  console.log(listArray);

  var highestTotal1 = 0;
  var highestTotal2 = 0;
  var highestTotal3 = 0;
  var result = 0;
  var total = 0;


  for (var i = 0; i < listArray.length; i++) { //itterate through list.
    var x = listArray[i]
    // console.log(x);
    // var makeNumber = x.trim();
    var cals = Number(x);
    // console.log(cals);

    if(cals > 0) { // if its a number
      total += cals;
      // console.log(total);

    }

    else if (x == "") {  // if its a line break - maybe use /n?

      if (total > highestTotal1) {
        highestTotal3 = highestTotal2;
        highestTotal2 = highestTotal1;
        highestTotal1 = total;
        total = 0;
      }
      else if (total > highestTotal2) {
        highestTotal3 = highestTotal2;
        highestTotal2 = total;
        total = 0;
      }
      else if (total > highestTotal3) {
        highestTotal3 = total;
        total = 0;
      }

      else {
        total = 0;

      }
    }
  }

  console.log(highestTotal1);
  console.log(highestTotal2);
  console.log(highestTotal3);

  var sumAll = highestTotal1 + highestTotal2 + highestTotal3;
  console.log(sumAll);

});






//Once finished output highest sum.
