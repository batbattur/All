#!/bin/bash -ex
inside() {
   echo "inside"
   exit 1
}

outside() {
   inside
   echo "outside"
}


# Check if the function exists (bash specific)
if declare -f "$1" > /dev/null
then
  # call arguments verbatim
  "$@"
else
  # Show a helpful error
  echo "'$1' is not a known function name" >&2
  exit 1
fi
