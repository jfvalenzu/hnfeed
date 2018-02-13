#!/usr/bin/env bash

## Bootstrap Vagrant File ##

apt-get update
apt-get install git -y
apt-get install curl -y
apt-get install vim -y


#sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
#echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
sudo apt-get update
sudo apt-get install mongodb-org -y 
sudo apt-get install mongodb-clients -y
sudo apt-get install -y mongodb-org-mongos
sudo apt-get install -y mongodb-org-shell
sudo apt-get install -y mongodb-org-server
sudo apt-get install -y mongodb-org-server-tools
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential
npm install express --save
npm install express-generator -g
npm install mongodb@2.2.33 --save
#sudo apt-get install -y  mongodb-org-shell=2.6.9 
#apt-get install -y openjdk-8-jdk maven  
#sudo apt-get install -y postgis postgresql-9.5-postgis-2.2
#sudo apt-get install -y supervisor
#sudo apt-get install -y virtualenv
#sudo apt-get install -y gunicorn




#sudo apt-get install docker-engine -y
#chmod +x /usr/local/bin/docker-compose

## Python
#sudo apt-get install python-setuptools python-dev build-essential git-core -y
#sudo easy_install pip
#sudo pip install virtualenv
#sudo pip install virtualenvwrapper
#mkdir ~/virtualenvs
#echo "export WORKON_HOME=~/virtualenvs" >> /home/vagrant/.bashrc
#echo "source /usr/local/bin/virtualenvwrapper.sh" >> /home/vagrant/.bashrc
#echo "export PIP_VIRTUALENV_BASE=~/virtualenvs" >> /home/vagrant/.bashrc
#source /home/vagrant/.bashrc
