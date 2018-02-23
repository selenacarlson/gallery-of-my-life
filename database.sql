CREATE TABLE gallery (
	id serial primary key,
	pic varchar(200),
	description varchar(200),
	likes int
);

INSERT INTO gallery (pic, description, likes)
VALUES ('/images/home.jpg', 'Hometown', 0), ('/images/iceland.jpg', 'Iceland', 0), ('/images/jack.jpg', 'Jack', 0), ('/images/kiddos.jpg', 'Kids', 0), ('/images/rosemount.jpg', 'Rosemount', 0), ('/images/taryn.jpg', 'Taryn', 0);