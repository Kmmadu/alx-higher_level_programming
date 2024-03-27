#!/bin/bash

# Take URL as input
URL="$1"

# Send request to URL and get the size of the response body
SIZE=$(curl -sI "$URL" | grep -i "Content-Length" | awk '{print $2}')

# Display the size in bytes
echo "$SIZE"

