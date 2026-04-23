#!/bin/bash

newman run ../postman/collections/coleción_de-pruebas-sobre-la-página-demoblaze.postman_collections.json -e ../postman/enviroment/ambiente.postman_environment.json --env-var "urlBase=https://www.demoblaze.com/" -r cli,html --reporter-html-export results-newman/report.html

