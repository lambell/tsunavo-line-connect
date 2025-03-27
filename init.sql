-- Drop database if exists
DROP DATABASE IF EXISTS tsunavo_line_connect;

-- Create database
CREATE DATABASE tsunavo_line_connect;

-- Connect to the database
\c tsunavo_line_connect;

-- Grant all privileges to postgres user
ALTER DATABASE tsunavo_line_connect OWNER TO postgres;
ALTER SCHEMA public OWNER TO postgres;
GRANT ALL PRIVILEGES ON DATABASE tsunavo_line_connect TO postgres WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON SCHEMA public TO postgres WITH GRANT OPTION;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO postgres;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO postgres;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON FUNCTIONS TO postgres; 