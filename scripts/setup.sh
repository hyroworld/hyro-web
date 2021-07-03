#!/bin/bash

# delete existing files
sudo rm -rf /home/ec2-user/hyro
mkdir /home/ec2-user/hyro

# install nodejs@14.x
curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -
sudo yum install -y nodejs


# install yarn: current user only
curl -o- -L https://yarnpkg.com/install.sh | bash

# active yarn
source /home/ec2-user/.bashrc

# install HYRO APP
yarn install

# navigate to root path
cd ~
sudo chown -R ec2-user:ec2-user hyro 

# kill exist server
pm2 kill

# start server
pm2 serve hyro/build 8080 --spa --name "HYRO" --env production