const hats = ['F', 'B', 'B', 'F', 'F', 'B', 'F'];

const hatsCount = {
	F: 0,
	B: 0,
};

hats.forEach((hat) => {
	if (hat === 'F') {
		hatsCount.F++;
	} else {
		hatsCount.B++;
	}
});

const result = hatsCount.F > hatsCount.B ? hats.map((hat) => 'F') : hats.map((hat) => 'B');

console.log(result);
