# install_various_dependencies
1) npm install react-bootstrap@next bootstrap@5.1.0
2) install extension es7 react redux
3) npm install --save typeface-roboto
4) npm install --dateformat
5) npm install moment --save
6) npm i @popperjs/core
7) npm install bootstrap --save
8) npm init(for node rest api initialion)
9) npm i express (to install express js)
10) npm i nodemon -D (install node daemon process)
11) npm run serve (to start api server)
12) npm i sequelize pg pg-hstore (for installing orm for node to connect with pg)
13) npm i axios
14) npm install --save express body-parser cors pg
15) install postgres
# config for postgres db 
DB_USER=postgres
DB_PASSWORD=qwerty
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=postgres
# table details to be created omn postgres
1) 
CREATE TABLE ticket_master(
   ticket_id SERIAL PRIMARY KEY,
   bucket_name VARCHAR(200),
   fk_bucket_id NUMERIC,
	fk_developer_id NUMERIC,
	description TEXT,
	acpt_criteria text,
	title varchar(50),
	creation_date date,
	developer_name varchar(500),
	ticket_created_by varchar(500)
);


2) 
CREATE TABLE member_developers(
   developer_id SERIAL PRIMARY KEY,
   developer_name VARCHAR(200),
   password varchar(500)
);

3)
CREATE TABLE project_bucket(
	bucket_id SERIAL PRIMARY KEY,
	bucket_name varchar(50) not null
)
4) 


# TO run the app

1) after installing postgres :
run node api:
go to project_ticketing/TheHuddleAPi : run => "npm run serve"

2) then run react server

go to project_ticketing/project_ticketing :
run
npm start