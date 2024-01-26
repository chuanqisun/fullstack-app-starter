#!/bin/bash

set -eux

# This is the Node version of the build script.
# The create-release script will move this to the top-level directory when
# creating its zip file.

npm ci
pushd ./backend
    npm ci
popd
