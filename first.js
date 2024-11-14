// Pseudo code:
// გვაქვს F-სგან და B-სგან შევსებული მასივი
// დაგვჭირდება დავითვალოთ რაოდენობრივად რამდენია თითოეული ელემენტი
// შემდეგ მასივის ყოველ ელემენტს შევამოწმებთ და თუ F ელემენტი შეგვხვდება მაშინ ვზრდით F-ის რაოდენობას, same for B
// მასივის ყველა ელემენტის შემოწმების მერე შევადარებთ ამ ელემენტების რაოდენობას
// რომელი ელემენტიც მეტი იქნება, ამ ელემენტით შევცვლით ყველა განსხვავებულს if F > B: B->F, else F->B

const initialState = ['F', 'B', 'B', 'F', 'F', 'B', 'F'];

const hats = {
	F: 0,
	B: 0,
};

initialState.forEach((hat) => {
	if (hat === 'F') {
		hats.F++;
	} else {
		hats.B++;
	}
});

const result = hats.F > hats.B ? initialState.map((hat) => 'F') : initialState.map((hat) => 'B');
const minNumOfSwitches = Math.min(...Object.values(hats));

console.log(
	`There were only ${minNumOfSwitches} switches needed to make everyone wear their hats the same way!`,
	`\n${result.join(', ')}`
);
