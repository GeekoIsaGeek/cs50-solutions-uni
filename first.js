/* Pseudo code:
 1. დაგვჭირდება დავითვალოთ რაოდენობრივად რამდენია თითოეული ელემენტი
 2. შემდეგ მასივის ყოველ ელემენტს შევამოწმებთ და თუ F ელემენტი შეგვხვდება მაშინ ვზრდით F-ის რაოდენობას, same for B
 3. მასივის ყველა ელემენტის შემოწმების მერე შევადარებთ ამ ელემენტების რაოდენობას
 4. რომელი ელემენტიც მეტი იქნება, ამ ელემენტით შევცვლით ყველა განსხვავებულს if F > B: B->F, else F->B
*/

const initialState = ['F', 'B', 'B', 'F', 'F', 'B', 'F'];

const hats = {
	F: 0,
	B: 0,
};

initialState.forEach((hat) => {
	switch (hat) {
		case 'F':
			hats.F++;
			break;
		case 'B':
			hats.B++;
			break;
	}
});

const result = hats.F > hats.B ? initialState.map((hat) => 'F') : initialState.map((hat) => 'B');
const minNumOfSwitches = Math.min(...Object.values(hats));

console.log(`შეტრიალდა ${minNumOfSwitches} ქუდი`, `\n${result.join(', ')}`);
