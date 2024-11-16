fans = ['F', 'F', 'B', 'N', 'F', 'F', 'B', 'N', 'B', 'F']

def count_segments(fans, direction):
    segments = 0
    for i in range(len(fans)):
        if fans[i] == direction and (i == 0 or fans[i - 1] != direction):
            segments += 1
    return segments

filtered_fans = [fan for fan in fans if fan != 'N']  # Exclude fans without caps ('N')

forward_segments = count_segments(filtered_fans, 'F')
backward_segments = count_segments(filtered_fans, 'B')

if forward_segments < backward_segments:
    print(f"Ask the 'forward' group to rotate their caps. {forward_segments} segment(s) need flipping.")
else:
    print(f"Ask the 'backward' group to rotate their caps. {backward_segments} segment(s) need flipping.")
