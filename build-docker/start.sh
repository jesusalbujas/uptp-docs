#!/bin/sh

# folder with dist app files
cd /usr/share/nginx/html/

# Set Vue host client
find -name 'index.html' -exec sed -i "s|http://localhost:9526|$VUE_HOST|g" {} \;

# Set ZK host client
find -name 'index.html' -exec sed -i "s|http://localhost:8888/webui/|$ZK_HOST|g" {} \;

# Set Scheduler host client
find -name 'index.html' -exec sed -i "s|http://scheduler:99999|$SCHEDULER_HOST|g" {} \;

# Start nginx web server
nginx && tail -f /dev/null
