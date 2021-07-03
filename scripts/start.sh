#!/bin/bash

#navigate to HYRO WEB APP
cd ~

# active yarn
source /home/ec2-user/.bashrc

# install pm2
yarn global add pm2

# kill exist server
pm2 kill

# kill nginx server
sudo systemctl stop nginx

# start server
pm2 serve hyro/build --name "HYRO" --spa
sudo systemctl start nginx
