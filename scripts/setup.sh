#!/bin/bash

# install nodejs@14.x
curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -
sudo yum install -y nodejs


# # install yarn: current user only
# curl -o- -L https://yarnpkg.com/install.sh | bash

# # active yarn
# source /home/ec2-user/.bashrc

# navigate to HYRO APP DIR
sudo rm -rf /home/ec2-user/hyro
mkdir /home/ec2-user/hyro
cd /home/ec2-user/hyro

# install HYRO APP
yarn install

# install pm2
yarn global add pm2 

# start server
# pm2 serve build 8080 --spa
pm2 start /home/ec2-user/hyro/node_modules/react-scripts/scripts/start.js --name "HYRO"