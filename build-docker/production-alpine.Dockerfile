FROM nginx:1.23.3-alpine

LABEL	maintainer="jalbujas@erpya.com;" \
	description="A community page VuePress with Hope theme"


# Init ENV with default values
ENV VUE_HOST="http://localhost:9526" \
	ZK_HOST="http://localhost:8888" \
	SCHEDULER_HOST="http://scheduler:99999"


COPY build-docker/start.sh .
COPY src/.vuepress/dist /usr/share/nginx/html/


RUN chmod +x *.sh


ENTRYPOINT ["sh" , "start.sh"]
