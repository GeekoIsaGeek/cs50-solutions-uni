import random


suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
deck = [f"{rank} of {suit}" for suit in suits for rank in ranks]


def pick_and_guess_cards():
    
    random.shuffle(deck)
    selected_cards = random.sample(deck, 5)
    

    suits_count = {}
    for card in selected_cards:
        suit = card.split(' of ')[1]
        if suit not in suits_count:
            suits_count[suit] = []
        suits_count[suit].append(card)
    

    for suit, cards in suits_count.items():
        if len(cards) >= 2:
            key_card, hidden_card = cards[0], cards[1]
            
            key_card_rank = ranks.index(key_card.split(' of ')[0])
            hidden_card_rank = ranks.index(hidden_card.split(' of ')[0])
	
            
            
            visible_cards = [card for card in selected_cards if card != hidden_card]
            
            visible_cards.sort(key=lambda card: ranks.index(card.split(' of ')[0]))
            
           
            print("The 4 visible cards are:")
            for card in visible_cards:
                print(card)
            
            
            print(f"\nThe guessed hidden card is: {hidden_card}")
            return selected_cards, visible_cards, hidden_card
    
    print("Could not find two cards with the same suit.")
    return None


selected, visible, hidden = pick_and_guess_cards()
