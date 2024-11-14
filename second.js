/* Pseudo Code
1. ვაერთიანებთ ყველა შუალედში შემავალ ელემენტებს მასივში
2. გადავუვლით მასივის ყველა ელემენტს და აღვრიცხავთ თითოეული ელემენტის რაოდენობას, სხვა სიტყვებით, რამდენი ადამიანი იყო
	კონკრეტულ დროს წვეულებაზე
3. რამდენჯერაც გამეორდება დრო, იმდენჯერ გავზრდით/დავაინკრემენტებთ დამსწრეების რაოდენობას
4. დავსორტავთ მიღებულ მასივს ადამიანების რაოდენობის მიხედვით და ამოვიღებთ პირველ ელემენტს, 
	სადაც key იქნება დრო, value ხალხის რაოდენობა
*/

const timeframes = [
	[6, 7, 8], // (6-8)
	[7, 8, 9, 10], // (7-10)
	[9, 10, 11, 12], // (9-12)
	[11, 12, 13], // (11-13)
	[5, 6, 7, 8], // (5-8)
];

const mergedHours = timeframes.flat(); // merging all arrays into a single one, in other words flattening it

const peopleOccuranceByHours = {}; // declaring object that will hold hours and count of people that were present at those hours

// populating the peopleOccuranceByHours object
mergedHours.forEach((hour) => {
	if (!peopleOccuranceByHours[hour]) {
		peopleOccuranceByHours[hour] = 1;
	} else {
		peopleOccuranceByHours[hour]++;
	}
});

// sorting the hours object by count of people, that way we can get the most common hour
const sortedHours = Object.entries(peopleOccuranceByHours).sort((a, b) => b[1] - a[1]);

// getting the most common hour (key of the first element of the sorted array)
const mostCommonHour = sortedHours[0][0];

console.log(`Most people have attended the party at ${mostCommonHour}`);
