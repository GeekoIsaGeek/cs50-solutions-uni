/* Pseudo code:
 1. დაგვჭირდება დავითვალოთ რაოდენობრივად რამდენია თითოეული ელემენტი
 2. შემდეგ მასივის ყოველ ელემენტს შევამოწმებთ და თუ F ელემენტი შეგვხვდება მაშინ ვზრდით F-ის რაოდენობას, same for B
 3. მასივის ყველა ელემენტის შემოწმების მერე შევადარებთ ამ ელემენტების რაოდენობას
 4. რომელი ელემენტიც მეტი იქნება, ამ ელემენტით შევცვლით ყველა განსხვავებულს if F > B: B->F, else F->B
*/

const hats = ['F', 'B', 'B', 'F', 'F', 'B', 'F'];

let forward = 0;
let backward = 0;

hats.forEach((hat) => {
	switch (hat) {
		case 'F':
			forward++;
			break;
		case 'B':
			backward++;
			break;
	}
});

const rotatedHats = forward > backward ? hats.map((hat) => 'F') : hats.map((hat) => 'B');

const minNumOfSwitches = Math.min(forward, backward);

console.log(`შეტრიალდა ${minNumOfSwitches} ქუდი და ახლა გვაქვს ასეთი მდგომარეობა:`, `\n\n${rotatedHats}`);
