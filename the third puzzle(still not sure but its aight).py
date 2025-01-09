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
    
    hidden_index = get_value_index(hidden_card[0])
    first_index = get_value_index(first_card[0])
    steps = (hidden_index - first_index) % 13
    if steps > 6:
        steps -= 13
    
    return hidden_card, steps

def order_remaining_cards(hidden_card, remaining_cards):
    remaining_cards.remove(hidden_card)
    remaining_cards.sort(key=lambda x: get_value_index(x[0]))
    return remaining_cards

def encode_steps(steps, remaining_cards):
    permutations = {
        1: [(0, 1, 2)],
        2: [(0, 2, 1)],
        3: [(1, 0, 2)],
        4: [(1, 2, 0)],
        5: [(2, 0, 1)],
        6: [(2, 1, 0)]
    }
    order = permutations[abs(steps)][0]
    ordered_cards = [remaining_cards[i] for i in order]
    return ordered_cards

def perform_trick():
    cards = generate_cards()
    hidden_card, steps = determine_hidden_card(cards)
    remaining_cards = order_remaining_cards(hidden_card, cards.copy())
    ordered_cards = encode_steps(steps, remaining_cards)
    
    print(f"Generated cards: {cards}")
    print(f"Hidden card: {hidden_card}")
    print(f"Remaining cards (in order): {ordered_cards}")

perform_trick()
