#!/bin/bash

echo installing dependencies
sudo yum update
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo yum install -y npm nodejs

# version check
node -v
npm -v

# check to make sure the symbolic link for nodejs node exists
echo checking for nodejs symlink
file="/usr/bin/node"
if [ -f $file ] && [ ! -L $file ] ; then
  echo "$file exists and is not a symlink"
  sudo ln -s /usr/bin/nodejs
else
  echo "$file exists and is already a symlink"
fi

# install the application using npm
# we need to traverse to where the application bundle is copied too.
echo installing application with npm
cd /home/ec2-user/hyro
sudo npm install

echo installing pm2
sudo npm install pm2 -g