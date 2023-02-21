set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";


 CREATE TABLE "public"."users" (
	"userId" serial,
	"username" TEXT NOT NULL UNIQUE,
	"hashedPassword" TEXT NOT NULL,
	"createAt" timestamptz(6) not null default now() ,
	"role" TEXT,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."projects" (
	"projectId" serial NOT NULL,
	"poNumber" TEXT NOT NULL UNIQUE,
	"name" TEXT NOT NULL,
	"address" TEXT NOT NULL,
	"city" TEXT NOT NULL,
	"state" TEXT NOT NULL,
	"zipcode" TEXT NOT NULL,
	"notes" TEXT NOT NULL,
	"completed" BOOLEAN NOT NULL,
	"assignedTo" serial NOT NULL,
	"createdAt" timestamptz NOT NULL DEFAULT 'now()',
	CONSTRAINT "projects_pk" PRIMARY KEY ("projectId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."image" (
	"imageId" serial NOT NULL,
	"url" TEXT NOT NULL,
	"project" serial NOT NULL,
	CONSTRAINT "image_pk" PRIMARY KEY ("imageId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "projects" ADD CONSTRAINT "projects_fk0" FOREIGN KEY ("assignedTo") REFERENCES "users"("userId");

ALTER TABLE "image" ADD CONSTRAINT "image_fk0" FOREIGN KEY ("project") REFERENCES "projects"("projectId");
