def find_min_drops(n):
    
    step = 0
    total = 0

    while total < n:
        step += 1
        total += step

    
    drops = step
    current_floor = 0

    for i in range(step, 0, -1):
        current_floor += i
        if current_floor > n:
            current_floor -= i
            break

        
        print(f"Drop from floor {current_floor}")
        if is_breaking_floor(current_floor):
            
            current_floor -= i
            for j in range(current_floor + 1, current_floor + i):
                print(f"Drop from floor {j}")
                drops += 1
                if is_breaking_floor(j):
                    print(f"Ball broke at floor {j}.")
                    return drops
            break
        else:
            drops += 1

    return drops

def is_breaking_floor(floor):
    
    breaking_floor = 80  
    return floor >= breaking_floor


n = 100  
print(f"Minimum number of drops in the worst case: {find_min_drops(n)}")
