#!/bin/bash

memcached -p -d 11211 &
echo "Started memcached." &
cd api && php artisan serve &
echo "Started API." &
cd web-app && http-server &
echo "Started Entourage App." &

wait

killall memcached
