#!/bin/bash

# delete existing files and navigate to HYRO WEB APP
sudo rm -rf /home/ec2-user/hyro
mkdir /home/ec2-user/hyro
cd /home/ec2-user/hyro

# install nodejs@14.x
curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -
sudo yum install -y nodejs


# install yarn: current user only
curl -o- -L https://yarnpkg.com/install.sh | bash

# active yarn
source /home/ec2-user/.bashrc

# install HYRO APP
yarn install

# kill exist server
pm2 kill

# start server
pm2 serve build 8080 --spa --name "HYRO" --env production