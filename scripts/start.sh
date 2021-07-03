#!/bin/bash

#navigate to HYRO WEB APP
cd ~

# active yarn
source /home/ec2-user/.bashrc

# install pm2
yarn global add pm2

# kill exist server
pm2 kill

# start server
pm2 serve hyro/build --name "HYRO" 