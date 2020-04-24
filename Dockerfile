FROM nginx:alpine

LABEL "com.avismatutina.docker.build.id"="syrius-furo-meets-fiori"
LABEL "com.avismatutina.salessupport.name"="SYRIUS Furo meets Fiori"
LABEL "com.avismatutina.salessupport.vendor"=""
LABEL "com.avismatutina.salessupport.image.maintainer"="<unknown>"
LABEL version="0.1.1"
LABEL description="Testing interoperability between Furo and Fiori"

COPY config/docker/nginx/nginx.conf.template /etc/nginx

RUN chmod -R 775 /var/log/nginx /var/cache/nginx/ /var/run/ /etc/nginx/*

COPY config/docker/docker-entrypoint.sh /
COPY dist /usr/share/nginx/html

CMD ["nginx"]
ENTRYPOINT ["/docker-entrypoint.sh"]
