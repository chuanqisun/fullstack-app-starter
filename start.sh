#!/bin/bash

set -eux

# This is the Node version of the start script.
# The create-release script will move this to the top-level directory when
# creating its zip file.

npx concurrently 'react-scripts start' '(cd ./backend && npm run start)'
