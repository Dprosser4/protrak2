insert into "users" ("username", "hashedPassword", "role", "firstName" , "lastName")
values ('dylan1', '$argon2id$v=19$m=4096,t=3,p=1$PnqCcNmXM6LKe+e8i9E8Zw$mzcDy8WZvSWpZRWsRGaSump9SCuKntniWL6vVCHPHJ4', 'admin', 'Dylan', 'Prosser');

insert into "users" ("username", "hashedPassword", "role", "firstName" , "lastName")
values ('admin1', '$argon2id$v=19$m=4096,t=3,p=1$0EkHGiZvBgd9VDgwZ1K22A$41Fgr06Udg/AJwmQTZHwwapYZNRXV/TkFLNRmVJAFc4', 'admin', 'Admin', 'User');

insert into "users" ("username", "hashedPassword", "role", "firstName" , "lastName")
values ('tech1', '$argon2id$v=19$m=4096,t=3,p=1$a4Vt1Jt3en+e2RkFnko88Q$soS42HSsBj7+qsaWal2pCSeU01wT+Gq7oI5axfwW6bc', 'tech', 'Technician', 'User');




insert into "projects" ("poNumber","name", "address", "city", "state", "zipcode")
values ('PT9000', 'Google Building', '1 Google Dr.', 'Irvine', 'CA', '92662');

insert into "projects" ("poNumber","name", "address", "city", "state", "zipcode")
values ('CFA1234', 'Chick-fil-a: 1234', '100 Chickfila St.', 'Atlanta', 'GA', '87215');

insert into "projects" ("poNumber","name", "address", "city", "state", "zipcode", "assignedTo")
values ('WAX42', 'Waxie HQ', '9353 Waxie Way', 'San Diego', 'CA', '92123', 3);

insert into "projects" ("poNumber","name", "address", "city", "state", "zipcode", "assignedTo")
values ('ECO2525', 'EcoLab North America', '5465 Ecolab Blvd.', 'Raleigh', 'NC', '78153', 3);

insert into "projects" ("poNumber","name", "address", "city", "state", "zipcode", "assignedTo")
values ('SPD4200', 'Speedway Gas: 4200', '751 Baker St', 'Costa Mesa', 'CA', '92626', 3);
