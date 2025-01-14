import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const calculateHardnessCoefficient = async (floors, balls) => {
	if (!floors || !balls) return;

	const R = Array.from({ length: floors }, (_, i) => i + 1).find((r) => Math.pow(r, balls) > floors);

	let hardnessCoefficient;

	let floor = R;
	let drops = 0;

	if (balls === 1) {
		const [hc, dropCount] = await handleSingleBallCase(hardnessCoefficient, drops, floors);
		console.log(`Hardness coefficient is: ${hc}\nTotal number of drops: ${dropCount}`);
		return;
	}

	console.log(`Chosen radix (base) is: ${R}`);

	balls--;
	while (floor > 0 && floor <= floors) {
		drops++;
		console.log(`Dropping crystal ${balls + 1} from floor: ${floor}`);
		const drop = await rl.question(`Did the crystal break (yes/no)?: `);
		if (drop === 'yes') {
			if (floor === 1) {
				hardnessCoefficient = 0;
				break;
			}
			// we need the highest value of hardnessCoefficient
			if (balls > 0) {
				floor--;
				balls--;
				hardnessCoefficient = floor > hardnessCoefficient ? floor : hardnessCoefficient;
			} else {
				hardnessCoefficient = floor;
				break;
			}
		} else {
			if (floor === floors) {
				hardnessCoefficient = floor;
				break;
			}
			floor++;
		}
	}

	rl.close();
	console.log(`Hardness coefficient is: ${hardnessCoefficient}\nTotal number of drops: ${drops}`);
};

const handleSingleBallCase = async (hardnessCoefficient, drops, floors) => {
	let floor = 1;

	console.log('Dropping crystal from floor:', floor);

	const drop = await rl.question(`Did the crystal break (yes/no)?: `);
	drops++;

	if (drop === 'yes') {
		hardnessCoefficient = 0;
	} else {
		while (floor <= floors) {
			drops++;
			floor++;

			console.log('Dropping crystal from floor:', floor);

			const drop = await rl.question(`Did the crystal break (yes/no)?: `);
			if (drop === 'yes') {
				hardnessCoefficient = floor;
				break;
			}
			if (floor === floors) {
				hardnessCoefficient = floor;
				break;
			}
		}
	}
	rl.close();
	return [hardnessCoefficient, drops];
};

console.log(calculateHardnessCoefficient(5, 3));
