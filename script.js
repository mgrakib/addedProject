// while loop 
var number = 1;

while (number<=39) {
    console.log(number + " "+"আজ আমার মন ভালো নেই <br>" );
    number++;
}



"<br/>"

let num = 58;
while (num <= 98) {
    console.log(num + "<br>");
    num++;
}

"<br/>";

let num2 = 412;
while (num2 <= 456) {
    if (num2 % 2 == 0) {
        console.log(num2);
    }
    num2++;
}



var learnTopic = ["HTML", "CSS", "bootstrap", "tailwind", "Javascript"];
for (let a = 0; a < learnTopic.length; a++){
    console.log(learnTopic[a]);
}



for (let num3 = 30; num3 <= 86; num3++){
    if (num3 == 44) {
        break
    }
    console.log(num3);
}

let bookPrice = [261, 105, 54, 154, 784, 154, 256, 454, 100, 40];
for (let i = 0; i < bookPrice.length; i++) {
	if (bookPrice[i] > 200) {
		continue;
	}
    document.write(bookPrice[i]);
    document.write("<br>")
}