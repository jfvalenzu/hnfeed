# HN Feed Test

*Previously you must install [Vagrant](https://www.vagrantup.com/downloads.html) for your SO.*

---

## Download this repository and start the Virtual Machine in Vagrant

Once Vagrant is installed locally, dowload files from this repository.

1. Clone repository **`$ git clone git@github.com:jfvalenzu/hnfeed.git`**

2. Go to the working directory
** `$ cd hnfeed/`**
3. Install the Virtual Machine in vagrant **`$ vagrant up`**

4. Access to the VM with ssh **`$ vagrant ssh`**

5. Start MongoDB service **`vagrant@vagrant:~$ sudo service mongod start`**

6. Situarse en el directorio **`$ cd /vagrant/`**

7. Start the application **`vagrant@vagrant:/vagrant$ DEBUG=myapp:* npm start`**

## Running Demo

*You can see my demo running on
[HN Demo](http://192.241.129.118:3000/).*