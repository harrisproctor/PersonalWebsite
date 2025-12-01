
import ast

try:
    with open('canvasan.js', 'r') as f:
        lines = f.readlines()
    
    # Extract lines 166 to 235 (0-indexed: 165 to 235)
    # Line 166 is index 165.
    # Line 235 is index 234.
    array_lines = lines[165:235]
    
    # First line: "const art = [0, 0, ..."
    # Remove "const art = "
    array_lines[0] = array_lines[0].replace('const art = ', '')
    
    full_array_str = "".join(array_lines)
    
    # Python lists use [], same as JS arrays.
    # Trailing comma is allowed in Python tuples/lists usually, but let's see.
    # ast.literal_eval handles lists.
    
    data = ast.literal_eval(full_array_str)
    print("Successfully parsed array.")
    print(f"Length: {len(data)}")
    
except Exception as e:
    print(f"Error parsing array: {e}")
