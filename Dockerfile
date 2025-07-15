FROM nginx:1.23.4-alpine
MAINTAINER <shoulong.zhang 2678885646@qq.com>
COPY /app/.vuepress/dist /usr/share/nginx/html
