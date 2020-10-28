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

can't seem to ssh into an ec2 instance? your ip may have changed, either update the sg to the new ip or just open it to all and pray your .pem doesn't get jacked. or you may be on the rps hotspot and it's not allowed.

## accessing DynamoDB

this api runs on an ec2 instance that wants to query DynamoDB to return results to the ui.
in order to do that the instance needs to be able to access the DynamoDB resource.
rather than store credentials on the instance and have to manage them and assure they don't get stolen it would be better to use an IAM role and an `instance profile` for the instance.
https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html
created a role named api-ec2-dynamo-role that allows full access to dynamo and is attached to the api ec2 instance.

## can the ui see the api?

right now I can query the api via the internet. that is not the best. in theory, the internet doesn't need to see the api at all, only the app does. If i can access the api via the app I can close off the api to the internet and the ui will still function.
