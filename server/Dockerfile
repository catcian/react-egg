# 使用node镜像
FROM daocloud.io/library/node:12.18
# 在容器中新建目录文件夹 egg
RUN mkdir -p /egg-server
# 将 /egg-server 设置为默认工作目录
WORKDIR /egg-server
# 将 package.json 复制默认工作目录
COPY package.json /egg-server/package.json
# 修改时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
# 安装依赖
RUN yarn config set register https://registry.npm.taobao.org
RUN yarn --production
# 将 copy 代码拷贝致容器
COPY ./ /egg-server
# 7001 端口暴露出
EXPOSE 7001
# 等待容器启动后执行脚本
CMD yarn prod