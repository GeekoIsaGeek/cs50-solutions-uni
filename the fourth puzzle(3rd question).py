import random

def generate_crystal_ball(hardness_coefficient):
    return {"hardness_coefficient": hardness_coefficient}

def linear_search_algorithm(num_floors, ball):
    drops = 0
    for floor in range(1, num_floors + 1):
        drops += 1
        if floor >= ball["hardness_coefficient"]:
            return floor, drops
    return num_floors, drops

def middle_floor_search_algorithm(num_floors, ball):
    drops = 0
    low = 1
    high = num_floors
    while low <= high:
        mid = (low + high) // 2
        drops += 1
        if mid >= ball["hardness_coefficient"]:
            if mid == low or mid == ball["hardness_coefficient"]:
                return mid, drops
            high = mid - 1
        else:
            low = mid + 1
    return mid, drops

def main():
    num_floors = int(input("Enter the number of floors: "))
    hardness_coefficient = random.randint(1, num_floors)
    
    ball1 = generate_crystal_ball(hardness_coefficient)
    ball2 = generate_crystal_ball(hardness_coefficient)
    
    print(f"\nHardness Coefficient (floor it breaks on): {hardness_coefficient}\n")

    
    linear_floor, linear_drops = linear_search_algorithm(num_floors, ball1)
    print(f"Linear Search: Ball breaks on floor {linear_floor}, Number of drops: {linear_drops}")

    
    middle_floor, middle_drops = middle_floor_search_algorithm(num_floors, ball2)
    print(f"Middle Floor Search: Ball breaks on floor {middle_floor}, Number of drops: {middle_drops}")

if __name__ == "__main__":
    main()
