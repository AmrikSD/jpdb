# jpdb
just pubilsh (a) database


This is a test project to learn about load balancing / scaling a service. 
The idea is to basically just publish a database via a rest api using two instances of a servcice, and load balance between them via nginx.

Data flow is as below 
user <-> nginx <-> (Service 1 | Service 2) <-> database
