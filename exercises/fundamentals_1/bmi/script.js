'use strict';

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

/* 1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
 */

/* 
let mass = 0
let height = 0

let markWeight = 78;
let markHeight = 1.69;

let markBMI = markWeight / (markHeight ** 2 );



let johnWeight = 92;
let johnHeight = 1.95

let johnBMI = johnWeight / (johnHeight ** 2 );

let markHigherBMI = markBMI > johnBMI;

if (markBMI > johnBMI){
    console.log(`Mark ${markBMI} is higher than John ${johnBMI}`)
}else {
    console.log(`Mark ${markBMI} is lower than John ${johnBMI}`)
} 
 */


/* There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. 
The winner with the highest average score wins a trophy! */

/* Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:

§Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 */

/* dolphins_score = (97 + 112 + 101) / 3;
koalas_score = (109 + 95 + 123) / 3;

console.log(dolphins_score, koalas_score);

if (dolphins_score > koalas_score && dolphins_score >= 100) {
    console.log('Dolphins win the trophy');
} else if (koalas_score > dolphins_score && koalas_score >= 100) {
    console.log('Koalas win the trophy');
} else if (dolphins_score === koalas_score && dolphins_score >= 100 && koalas_score >= 100) {
    console.log('Both win the trophy');
} else {
    console.log('No team wins the trophy ');
} */

/* const day = 'thursday';

if (day === 'monday') {
	console.log('Plan course structure');
	console.log('Prepare theory videos');
} else if (day === 'tuesday') {
	console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
	console.log('Write code examples');
} else if (day === 'friday') {
	console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
	console.log('Enjoy');
} else {
	console.log('Not a valid day!');
} */

/* const bill = 25;

const tip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip(bill)} and the total value ${bill + tip(bill)}`); */

// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

/* let calcAverage = (a, b, c) => (a + b + c) / 3;

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

const checkwinner = function( avgDolphins, avgKoalas) {
		if (avgDolphins >= 2 * avgKoalas) {
				console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
		} else if (avgKoalas >= 2 * avgDolphins) {
				console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
		} else {
				console.log('No team wins...');
		}
}
checkwinner(avgDolphins, avgKoalas); */


// let bill = 100;
/* 
function calcTip(bill){
		if (bill >= 50 && bill <=300){
			const tip = (bill * 0.15);
			return tip;
		}else {
			const tip = (bill * 0.20);
			return tip;
		}

}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills.length -1)];
const totalValues = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills.length -1) + bills.length -1]
console.log(bills);
console.log(tips);
console.log(totalValues);
 */

const mark = {
	firsName: 'Mark',
	lastName: 'Miller',
	weight: 78,
	height: 1.69,

	calcBmi: function() {
        this.bmi = this.weight / (this.height **2);
        return this.bmi;
	},
    
}

const john = {
    firsName: 'John',
    lastName: 'Smith',
    weight: 92,
    height: 1.95,

	calcBmi: function() {
        this.bmi = this.weight / (this.height **2);
        return this.bmi;
    },
}

mark.calcBmi();
john.calcBmi();




console.log(`${mark.firsName}'s BMI ${mark.bmi} is ${mark.bmi > john.bmi?'higher':'lower'} than ${john.firsName}'s BMI ${john.bmi}`)



