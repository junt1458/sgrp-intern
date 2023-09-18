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
    passport_expires DATE,
    birthday DATE,
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

-- display_status: 0 (Draft) / 1 (In Review) / 2 (Form Open) / 3 (Form Closed)
CREATE TABLE opportunities (
    opportunity_id UUID DEFAULT uuid_generate_v4() UNIQUE PRIMARY KEY,
    partner_id UUID NOT NULL,
    city VARCHAR NOT NULL,
    display_status INT DEFAULT 0,
    slots INT DEFAULT 0,
    detail VARCHAR DEFAULT '',
    date_from DATE NOT NULL,
    date_to DATE NOT NULL,
    manager_id UUID,
    FOREIGN KEY (partner_id)
      REFERENCES partners (partner_id),
    FOREIGN KEY (manager_id)
      REFERENCES managers (manager_id)
);

-- For memo purpose
-- ALTER TABLE managers ADD (auth0_uid VARCHAR DEFAULT '' UNIQUE);