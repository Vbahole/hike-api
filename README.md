# hike-api

the api for the hike app

## starting up a new server?

sudo su
yum update -y
yum install httpd -y
service httpd start
chkconfig httpd on
cd /var/www/html

node.js does not require apache to be installed to serve

need to kill node? `killall node`

want to run Postman on linux? `./'Postman Agent'/app/'Postman Agent'`

can't seem to ssh into an ec2 instance? your ip may have changed, either update the sg to the new ip or just open it to all and pray your .pem doesn't get jacked
