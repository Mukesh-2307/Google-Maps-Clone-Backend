# python script
import sys
import json
import osmnx as ox
import sklearn

# print (sklearn.__version__)
# print ("hello ",str(sys.argv[1]))

def compute_shortest_path(data):

    # input data validation
    if "start_loc" not in data or "end_loc" not in data:
        raise ValueError("Input data must contain 'start_loc' and 'end_loc'")

    # setting the received origin and destination values
    origin = data["start_loc"]
    print("origin (lat,long) :", origin[1],origin[0])
    destination = data["end_loc"]
    print("destination (lat,long) :", destination[1],destination[0])

    # finding all the available path between start and end location
    graph = ox.graph_from_place("Bengaluru, India", network_type="drive")
    print("graph before project",graph)

    # finding the shortest path out of all the available path
    path = ox.shortest_path(
        graph,
        ox.distance.nearest_nodes(graph, origin[1], origin[0]),
        ox.distance.nearest_nodes(graph, destination[1], destination[0]),
        weight="length"
    )
    
    # returning the shortest path
    return {"path": path}

# validating coordinates
def is_valid_coordinate(coord):
    return isinstance(coord, list) and len(coord) == 2 and all(isinstance(c, (float, int)) for c in coord)

if __name__ == "__main__":
    try:
        # reading inputs and assigning to pass further
        input_data = sys.stdin.read()
        # print("value in input_data : ",input_data)
    
        data = json.loads(input_data)
        # coordinates validation
        if not is_valid_coordinate(data["start_loc"]) or not is_valid_coordinate(data["end_loc"]):
            raise ValueError("Coordinates must be a list of two numbers: [latitude, longitude]")
        # print(data)
    
        result = compute_shortest_path(data)
        print(json.dumps(result))
        # print(result)
        
    # error handling
    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)
