#!/bin/bash
echo starting server

cd /home/ec2-user/hyro
echo building application...
sudo npm run build

echo starting application...
sudo pm2 start npm -- run production