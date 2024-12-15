import sys
# print ("hello world!")
print ("hello ",str(sys.argv[1]))

# import json
# import osmnx as ox

# def compute_shortest_path(data):

#     origin = data["origin"]
#     destination = data["destination"]

#     graph = ox.graph_from_place("Bengaluru, India", network_type="drive")

#     path = ox.shortest_path(
#         graph,
#         ox.distance.nearest_nodes(graph, origin[1], origin[0]),
#         ox.distance.nearest_nodes(graph, destination[1], destination[0]),
#         weight="length"
#     )
    
#     return {"path": path}

# if __name__ == "__main__":
#     input_data = sys.stdin.read()
#     data = json.loads(input_data)
#     result = compute_shortest_path(data)
#     print(json.dumps(result))
