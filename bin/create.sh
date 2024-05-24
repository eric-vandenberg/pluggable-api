#!/bin/bash

curl -X POST -H "Content-Type: application/json" -d @./bin/payload.json http://localhost:3000/api/v1/platform/$1/reviews
