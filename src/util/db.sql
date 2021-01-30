create table articles(
id int not null primary key auto_increment,
title varchar(255) not null,
image text not null,
description text not null,
likes int not null,
creation_date timestamp default current_timestamp,
autor_id int not null
);

create table users(
id int not null primary key auto_increment,
fullname varchar(255) not null,
image text not null,
bithday datetime not null,
email varchar(255) not null,
password varchar(100) not null,
role_id int not null
);

create table comments(
id int not null primary key auto_increment,
creation_date timestamp default current_timestamp not null,
autor_id int not null,
likes int not null,
dislikes int not null,
type_id int not null
);

create table user_roles(
id int not null primary key auto_increment,
role_description varchar(10)
);

create table comment_types(
id int not null primary key auto_increment,
type_description varchar(10)
);

alter table articles add constraint fk_articles_autor foreign key (autor_id) references users(id);
alter table comments add constraint fk_comment_autor foreign key (autor_id) references users(id);
alter table users add constraint fk_user_roles foreign key (role_id) references user_roles(id);
alter table comments add constraint fk_comment_types foreign key (type_id) references comment_types(id);

insert into comment_types (type_description)
values ('comment'), ('reply');

insert into user_roles(role_description) values ('user'), ('autor');