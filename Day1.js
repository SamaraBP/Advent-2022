const fs = require('fs');

fs.readFile('calList.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Break the string down into arrays.
  var listArray = data.split("\r\n");
  console.log(listArray);

  var highestTotal = 0;
  var total = 0;


  for (var i = 0; i < 20; i++) { //itterate through list.
    var x = listArray[i]
    // console.log(x);
    // var makeNumber = x.trim();
    var cals = Number(x);
    console.log(cals);

    if(cals > 0) { // if its a number
      total += cals;
      // console.log(total);

    } 
    
    else if (x == "") {  // if its a line break - maybe use /n?

      if (total > highestTotal) {
        highestTotal = total;
        total = 0;
        console.log("entered highest total update.")
      }
      else {
        total = 0;
        console.log("skipped highest total update.")
      }
    }
  }

  console.log(highestTotal);


});






//Once finished output highest sum.
