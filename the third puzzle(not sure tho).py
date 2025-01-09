import random

def generate_cards():
    suits = ['clubs', 'hearts', 'spades', 'diamonds']
    values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    deck = [(value, suit) for value in values for suit in suits]
    random.shuffle(deck)
    return deck[:5]

def get_suit_index(suit):
    suits = ['clubs', 'hearts', 'spades', 'diamonds']
    return suits.index(suit)

def get_value_index(value):
    values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    return values.index(value)

def determine_hidden_card(cards):
    first_card = cards[0]
    other_cards = cards[1:]
    
    same_suit_cards = [card for card in other_cards if card[1] == first_card[1]]
    
    if same_suit_cards:
        hidden_card = min(same_suit_cards, key=lambda x: get_value_index(x[0]))
    else:
        hidden_card = min(other_cards, key=lambda x: get_value_index(x[0]))
    
    return hidden_card

def order_remaining_cards(hidden_card, remaining_cards):
    remaining_cards.remove(hidden_card)
    remaining_cards.sort(key=lambda x: get_value_index(x[0]))
    return remaining_cards

def perform_trick():
    cards = generate_cards()
    hidden_card = determine_hidden_card(cards)
    
    remaining_cards = order_remaining_cards(hidden_card, cards.copy())
    print(f"Generated cards: {cards}")
    print(f"Hidden card: {hidden_card}")
    print(f"Remaining cards (in order): {remaining_cards}")

perform_trick()
