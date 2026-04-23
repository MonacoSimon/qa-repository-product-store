#!/bin/bash

docker run -t   -u root   -v $(pwd):/zap/wrk   zaproxy/zap-stable zap-baseline.py -t https://www.demoblaze.com/   -r reporte.html


