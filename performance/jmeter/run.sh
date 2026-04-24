#!/bin/bash

set -e

BASE_DIR=$(pwd)

TEST_PLAN_DIR="$BASE_DIR/test-plan"
RESULTS_DIR="$BASE_DIR/../../results-docker/jmeter"

mkdir -p "$RESULTS_DIR"

echo "Ejecutando JMeter en Docker..."

for test in "$TEST_PLAN_DIR"/*.jmx; do
    filename=$(basename "$test" .jmx)
    timestamp=$(date +%Y%m%d-%H%M%S)

    echo "Ejecutando: $filename"

    docker run --rm \
        -v "$TEST_PLAN_DIR":/tests \
        -v "$RESULTS_DIR":/results \
        justb4/jmeter \
        -n \
        -t /tests/$(basename "$test") \
        -l /results/${filename}.jtl \
        -e \
        -o /results/${filename}-report-$timestamp \
        -j /results/${filename}.log

    echo "✔ Terminado: $filename"
    echo "-----------------------------"
done

echo "Todos los tests finalizados"
echo "Resultados en: $RESULTS_DIR"
