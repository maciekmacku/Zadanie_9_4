
function drawTree(a) {
    for (var i = 0; i < a; i++) {
        var star = '';
        for (var j = 0; j <= i; j++) {
            star += '*';
        }
        console.log(star);
    }
}
drawTree(10)

// dla ambitnych 

function drawAsterisksTree(size) {
	var asterisk="*";
	for (var i=0; i<size; i++) {
		var d = size - i;
		var line = "";
		while (d > 1) {
			line = line.concat(' ');
			d--;
		}
		console.log(line + asterisk);
		asterisk = asterisk.concat("**");
	}
}

drawAsterisksTree(10);

// petle for

for ( var k = 0 ; k < 10 ; k++) {
  console.log('The value of k is now: ' + k);
} 

// petla while
var i = 0;

while (i < 10) {
    console.log(i);
    i++;
}


// petla do while
var i = 0;

do {
    console.log(i);
    i++;
} while (i < 10);


//instrukcja przerwania
for ( var k = 0 ; k < 10 ; k++) {
    console.log('The value of k is now: ' + k);

    if (k == 5) {
        console.log('k is equal to 5. The end');

        break;
    }
}	

//instrukcja przeskoku

for ( var k = 0 ; k < 10 ; k++) {

    console.log('The value of k is now: ' + k);

    if (k > 5) {
        continue;
    }

    console.log('Instruction at the end of the loop ');
}
