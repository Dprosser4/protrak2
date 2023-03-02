insert into "users" ("username", "hashedPassword", "role", "firstName" , "lastName")
values ('dylan1', '$argon2id$v=19$m=4096,t=3,p=1$PnqCcNmXM6LKe+e8i9E8Zw$mzcDy8WZvSWpZRWsRGaSump9SCuKntniWL6vVCHPHJ4', 'tech', 'Dylan', 'Prosser');

insert into "users" ("username", "hashedPassword", "role", "firstName" , "lastName")
values ('chase1', '$argon2id$v=19$m=4096,t=3,p=1$PnqCcNmXM6LKe+e8i9E8Zw$mzcDy8WZvSWpZRWsRGaSump9SCuKntniWL6vVCHPHJ4', 'admin', 'Chase', 'Prosser');

insert into "users" ("username", "hashedPassword", "role", "firstName" , "lastName")
values ('ryan1', '$argon2id$v=19$m=4096,t=3,p=1$PnqCcNmXM6LKe+e8i9E8Zw$mzcDy8WZvSWpZRWsRGaSump9SCuKntniWL6vVCHPHJ4', 'tech', 'Ryan', 'Prosser');

insert into "users" ("username", "hashedPassword", "role", "firstName" , "lastName")
values ('ron1', '$argon2id$v=19$m=4096,t=3,p=1$PnqCcNmXM6LKe+e8i9E8Zw$mzcDy8WZvSWpZRWsRGaSump9SCuKntniWL6vVCHPHJ4', 'tech', 'Ron', 'Prosser');


insert into "projects" ("poNumber","name", "address", "city", "state", "zipcode")
values ('PT9000', 'Google Building', '1 Google Dr.', 'Irvine', 'CA', '92662')
