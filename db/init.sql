create table navy_options (
    id serial primary key,
    name varchar(100),
    cost integer,
    quantity integer,
    image varchar(100)
);

create table army_options(
    id serial primary key,
    name varchar(100),
    cost integer,
    quantity integer,
    image varchar(100)
);

create table selected_units (
    id integer primary key,
    name varchar(100),
    cost integer,
    quantity integer,
    image varchar(100)
);




insert into navy_options (
    name,
    cost,
    quantity,
    image
) values 
(
    'Galley', 100, 0, 'galley'
),
(
    'Caravel', 200, 0, 'caravel'
),
(
    'Carrack', 200, 0, 'carrack'
),
(
    'Curragh', 50, 0, 'curragh'
),
(
    'Man-O-War', 300, 0, 'man-o-war'
),
(
    'Galleon', 250, 0, 'galleon'
),
(
    'Frigate', 300, 0, 'frigate'
);




insert into army_options (
    name,
    cost,
    quantity,
    image
) values 
(
    'Spearman', 10, 0, 'spearman'
),
(
    'Swordman', 20, 0, 'swordman'
),
(
    'Archer', 25, 0, 'archer'
),
(
    'Knight', 40, 0, 'knight'
),
(
    'Catapult', 100, 0, 'catapult'
),
(
    'Crossbow Man', 20, 0, 'crossbow'
),
(
    'Peasant', 5, 0, 'peasant'
),
(
    'Jon', 10000, 0, 'jon'
),
(
    'Trebuchet', 150, 0, 'trebuchet'
),
(
    'Scout', 15, 0, 'scout'
)
    