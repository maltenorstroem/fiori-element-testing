#!/bin/sh

HOST=$(ifconfig en0 | grep inet | grep -v inet6 | cut -f 2 -d ' ')
docker run --name=furo-fiori -p 8080:8080 -e "BACKEND_SERVICE=http://$HOST:7070" furo-fiori-webapp:latest
