#!/bin/sh
set -e

envsubst '\$BACKEND_SERVICE' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf
exec nginx -g 'daemon off;'
