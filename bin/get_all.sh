#!/bin/bash

curl -X GET -H "Content-Type: application/json" http://localhost:3000/api/v1/platform/$1/reviews
