const findHiddenCard = (cards) => {
	const cardsGroupedBySuit = {};

	cards.forEach((card) => {
		const [value, suit] = card.split('_');

		if (!cardsGroupedBySuit[suit]) {
			cardsGroupedBySuit[suit] = [];
		}
		cardsGroupedBySuit[suit].push(value);
	});

	for (const suit in cardsGroupedBySuit) {
		const values = cardsGroupedBySuit[suit];

		if (values.length >= 2) {
			let firstCard = values[0];
			let secondCard = values[1];

			const valueMapping = {
				A: 1,
				J: 11,
				Q: 12,
				K: 13,
			};

			firstCard = valueMapping[firstCard] || parseInt(firstCard);
			secondCard = valueMapping[secondCard] || parseInt(secondCard);

			const distance = (secondCard - firstCard) % 13;

			let hiddenCard;
			if (1 <= distance && distance <= 6) {
				hiddenCard = `${firstCard}_${suit}`;
			} else {
				hiddenCard = `${secondCard}_${suit}`;
			}

			return hiddenCard;
		} else {
			return 'შერჩეული კარტებით შეუძლებელია დადგენა. საჭიროა ერთნაირი სიმბოლოს მქონე მინიმუმ 2 კარტის ამორჩევა';
		}
	}
};

const input = ['8_C', '5_C', '10_C', 'K_H', '4_D'];
const hiddenCard = findHiddenCard(input);
console.log(`დამალული კარტი არის: ${hiddenCard}`);
