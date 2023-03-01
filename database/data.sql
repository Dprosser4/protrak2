insert into "users" ("username", "hashedPassword", "role")
values ('dylan1', '$argon2id$v=19$m=4096,t=3,p=1$PnqCcNmXM6LKe+e8i9E8Zw$mzcDy8WZvSWpZRWsRGaSump9SCuKntniWL6vVCHPHJ4', 'tech');

insert into "users" ("username", "hashedPassword", "role")
values ('chase1', '$argon2id$v=19$m=4096,t=3,p=1$PnqCcNmXM6LKe+e8i9E8Zw$mzcDy8WZvSWpZRWsRGaSump9SCuKntniWL6vVCHPHJ4', 'admin');

insert into "projects" ("poNumber","name", "address", "city", "state", "zipcode")
values ('PT9000', 'Google Building', '1 Google Dr.', 'Irvine', 'CA', '92662')
