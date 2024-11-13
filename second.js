const timeframes = [
	[6, 7, 8], // (6-8)
	[7, 8, 9, 10], // (7-10)
	[9, 10, 11, 12], // (9-12)
	[11, 12, 13], // (11-13)
	[5, 6, 7, 8], // (5-8)
];

const mergedHours = timeframes.flat(); // all together

const hours = {}; // object will hold hours and count of people that were present at that time

// populating the hours object
mergedHours.forEach((hour) => {
	if (!hours[hour]) {
		hours[hour] = 1;
	} else {
		hours[hour]++;
	}
});

// sorting the hours object by count of people, that way we can get the most common hour
const sortedHours = Object.entries(hours).sort((a, b) => b[1] - a[1]);

const mostCommonHour = `${sortedHours[0][0]}:00`;
const mostCommonRange = `${mostCommonHour}:00 - ${parseInt(mostCommonHour) + 1}:00`;

console.log(
	`Most people have attended the party at ${mostCommonHour}`,
	`\nMost people have attended the party at the timeframe of: ${mostCommonRange}`
);
