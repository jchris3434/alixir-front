#!/bin/bash

docker build -t alixir-frontend-dev .

docker run -d -p 5173:5173 alixir-frontend-dev
