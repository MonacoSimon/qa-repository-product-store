#!/bin/bash

set -e

BASE_DIR=$(pwd)

POSTMAN_DIR="$BASE_DIR/postman"
RESULTS_DIR="$BASE_DIR/newman/results-newman"

mkdir -p "$RESULTS_DIR"

echo "Ejecutando Newman con Docker desde api-testing..."

docker run --rm -t \
  -v "$POSTMAN_DIR":/postman \
  -v "$RESULTS_DIR":/results \
  postman/newman \
  run /postman/collections/collection.json \
  -e /postman/enviroment/ambiente.postman_environment.json \
  --env-var "urlBase=https://www.demoblaze.com/" \
  -r cli,html \
  --reporter-html-export /results/report.html

echo "Ejecución finalizada"
echo "Reporte generado en: $RESULTS_DIR/report.html"
