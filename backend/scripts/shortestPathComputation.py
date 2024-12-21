# # python script
# import sys
# import json
# import osmnx as ox
# # import sklearn

# # print (sklearn.__version__)
# # print ("hello ",str(sys.argv[1]))

# # validating coordinates
# def is_valid_coordinate(coord):
#     return isinstance(coord, list) and len(coord) == 2 and all(isinstance(c, (float, int)) for c in coord)

# def compute_shortest_path(data):
#     try:
#         print("entered python script function")
#         # input data validation
#         if "start_loc" not in data or "end_loc" not in data:
#             raise ValueError("Input data must contain 'start_loc' and 'end_loc'")

#         # setting the received origin and destination values
#         origin = data["start_loc"]
#         # print("origin (lat,long) :", origin[1],origin[0])
#         destination = data["end_loc"]
#         # print("destination (lat,long) :", destination[1],destination[0])
#         if not is_valid_coordinate(origin):
#             raise ValueError(f"Invalid 'start_loc' coordinates: {origin}")
#         if not is_valid_coordinate(destination):
#             raise ValueError(f"Invalid 'end_loc' coordinates: {destination}")
        
#         print(f"Origin: {origin}, Destination: {destination}")

#         try:
#             # finding all the available path between start and end location
#             graph = ox.graph_from_place("Bengaluru, India", network_type="drive")
#             # print("graph before project",graph)
#         except Exception as e:
#             raise RuntimeError(f"failed to create graph : {e}")

#         try:
#             # finding the shortest path out of all the available path
#             path = ox.shortest_path(
#                 graph,
#                 ox.distance.nearest_nodes(graph, origin[1], origin[0]),
#                 ox.distance.nearest_nodes(graph, destination[1], destination[0]),
#                 weight="length"
#             )
#         except Exception as e:
#             raise RuntimeError(f"error while computing shortest path: {e}")

#         try:
#             # converting path IDs into coordinates
#             path_coordinates = [(graph.nodes[node]['y'], graph.nodes[node]['x']) for node in path]
#             # print(path_coordinates)
#         except Exception as e:
#             raise RuntimeError(f"error while converting path nodes to coordinates: {e}")
    
#         # returning the shortest path
#         print("completed exectuion now exiting")
#         return {"path": path_coordinates}
    
#     except Exception as e:
#         raise RuntimeError(f"Error in compute_shortest_path: {e}")

# if __name__ == "__main__":
#     try:
#         print("entered python script")
#         # reading inputs and assigning to pass further
#         input_data = sys.stdin.read()
#         # print("value in input_data : ",input_data)
#         try:
#             data = json.loads(input_data)
#         except json.JSONDecodeError as e:
#             raise ValueError (f"Invalid JSON input: {e}")
    
#         # coordinates validation
#         if not is_valid_coordinate(data["start_loc"]) or not is_valid_coordinate(data["end_loc"]):
#             raise ValueError("Coordinates must be a list of two numbers: [latitude, longitude]")
#         # print(data)
    
#         result = compute_shortest_path(data)
#         print(json.dumps(result))
#         # print(result)
        
#     # error handling
#     except Exception as e:
#         print(json.dumps({"error": str(e)}))
#         sys.exit(1)




# test code
import sys
print("py script executed successfully")
sys.exit(0)