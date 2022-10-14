\connect mealforfamilydb

CREATE TABLE contact
(
    id serial PRIMARY KEY,
    title  VARCHAR (50)  NOT NULL,
    email  VARCHAR (50)  NOT NULL,
    phoneNumber  VARCHAR (50)  NOT NULL,
    createdAt  VARCHAR (50)  NOT NULL,
    updatedAt  VARCHAR (50)  NOT NULL,
    isDeleted  BOOLEAN NOT NULL 
);

ALTER TABLE "contact" OWNER TO test;

Insert into contact(title, email, phoneNumber, createdAt, updatedAt, isDeleted) values( 'Title1','test1@gmail.com', '065 4672257', '10/10/2022 13:01:00', '10/13/2022 12:00:10', false);
Insert into contact(title, email, phoneNumber, createdAt, updatedAt, isDeleted) values( 'Title2','test2@gmail.com', '066 5897642', '10/10/2022 13:01:00', '10/13/2022 12:00:10', false);
Insert into contact(title, email, phoneNumber, createdAt, updatedAt, isDeleted) values( 'Title3','test3@gmail.com', '063 7896523', '10/10/2022 13:01:00', '10/13/2022 12:00:10', false);