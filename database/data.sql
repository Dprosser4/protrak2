insert into "users" ("username", "hashedPassword", "role", "firstName" , "lastName")
values ('dylan1', '$argon2id$v=19$m=4096,t=3,p=1$PnqCcNmXM6LKe+e8i9E8Zw$mzcDy8WZvSWpZRWsRGaSump9SCuKntniWL6vVCHPHJ4', 'tech', 'Dylan', 'Prosser');

insert into "users" ("username", "hashedPassword", "role", "firstName" , "lastName")
values ('chase1', '$argon2id$v=19$m=4096,t=3,p=1$PnqCcNmXM6LKe+e8i9E8Zw$mzcDy8WZvSWpZRWsRGaSump9SCuKntniWL6vVCHPHJ4', 'admin', 'Chase', 'Prosser');

insert into "users" ("username", "hashedPassword", "role", "firstName" , "lastName")
values ('ryan1', '$argon2id$v=19$m=4096,t=3,p=1$PnqCcNmXM6LKe+e8i9E8Zw$mzcDy8WZvSWpZRWsRGaSump9SCuKntniWL6vVCHPHJ4', 'tech', 'Ryan', 'Prosser');

insert into "users" ("username", "hashedPassword", "role", "firstName" , "lastName")
values ('ron1', '$argon2id$v=19$m=4096,t=3,p=1$PnqCcNmXM6LKe+e8i9E8Zw$mzcDy8WZvSWpZRWsRGaSump9SCuKntniWL6vVCHPHJ4', 'tech', 'Ron', 'Prosser');


insert into "projects" ("poNumber","name", "address", "city", "state", "zipcode")
values ('PT9000', 'Google Building', '1 Google Dr.', 'Irvine', 'CA', '92662');

insert into "projects" ("poNumber","name", "address", "city", "state", "zipcode")
values ('CFA1234', 'Chick-fil-a: 1234', '100 Chickfila St.', 'Atlanta', 'GA', '87215');

insert into "projects" ("poNumber","name", "address", "city", "state", "zipcode")
values ('WAX42', 'Waxie HQ', '9353 Waxie Way', 'San Diego', 'CA', '92123');

insert into "projects" ("poNumber","name", "address", "city", "state", "zipcode")
values ('ECO2525', 'EcoLab North America', '5465 Ecolab Blvd.', 'Raleigh', 'NC', '78153');

insert into "projects" ("poNumber","name", "address", "city", "state", "zipcode")
values ('SPD4200', 'Speedway Gas: 4200', '751 Baker St', 'Costa Mesa', 'CA', '92626');
