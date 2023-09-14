CREATE EXTENSION IF NOT EXISTS "uuid-ossp";  

CREATE TABLE students (
    client_id UUID DEFAULT uuid_generate_v4() UNIQUE PRIMARY KEY,
    auth0_uid VARCHAR NOT NULL UNIQUE,
    name VARCHAR DEFAULT '',
    phone VARCHAR DEFAULT '',
    email VARCHAR DEFAULT '',
    gender VARCHAR DEFAULT '',
    passport_no VARCHAR DEFAULT '',
    passport_country VARCHAR DEFAULT '',
    passport_nationality VARCHAR DEFAULT '',
    passport_expires DATE,
    birthday DATE NOT NULL,
    department VARCHAR DEFAULT '',
    major VARCHAR DEFAULT '',
    registered_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE partners (
    partner_id UUID DEFAULT uuid_generate_v4() UNIQUE PRIMARY KEY,
    auth0_uid VARCHAR NOT NULL UNIQUE,
    display_name VARCHAR DEFAULT '',
    address_zipcode VARCHAR DEFAULT '',
    address_country VARCHAR DEFAULT '',
    address_line1 VARCHAR DEFAULT '',
    address_line2 VARCHAR DEFAULT '',
    contact_name VARCHAR DEFAULT '',
    contact_email VARCHAR DEFAULT '',
    contact_phone VARCHAR DEFAULT '',
    registered_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE managers (
    manager_id UUID DEFAULT uuid_generate_v4() UNIQUE PRIMARY KEY,
    auth0_uid VARCHAR NOT NULL UNIQUE,
    name VARCHAR DEFAULT '',
    email VARCHAR DEFAULT '',
    phone VARCHAR DEFAULT '',
    registered_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


ALTER TABLE managers ADD (auth0_uid VARCHAR DEFAULT '' UNIQUE);