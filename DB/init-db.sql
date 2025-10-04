  -- CREATE DATABASE app_db;

  -- run as super-user (postgres) during first container start
SELECT 'CREATE DATABASE app_db'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'app_db')\gexec

-- \connect app_db;

-- CREATE TABLE IF NOT EXISTS notifications (
--   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--   user_id UUID NOT NULL,
--   channel VARCHAR(20) CHECK (channel IN ('email','sms','push','inapp')),
--   title TEXT,
--   body TEXT,
--   is_read BOOLEAN DEFAULT FALSE,
--   created_at TIMESTAMP DEFAULT NOW()
-- );

-- CREATE TABLE IF NOT EXISTS notification_preferences (
--   user_id UUID PRIMARY KEY,
--   email BOOLEAN DEFAULT TRUE,
--   sms   BOOLEAN DEFAULT TRUE,
--   push  BOOLEAN DEFAULT TRUE,
--   inapp BOOLEAN DEFAULT TRUE
-- );

-- CREATE TABLE IF NOT EXISTS push_subscriptions (
--   user_id UUID PRIMARY KEY,
--   subscription JSONB NOT NULL
-- );

-- CREATE TABLE IF NOT EXISTS users (
--   id            UUID PRIMARY KEY,
--   email         VARCHAR(255) UNIQUE,
--   phone         VARCHAR(32),
--   email_opt     BOOLEAN NOT NULL DEFAULT TRUE,
--   sms_opt       BOOLEAN NOT NULL DEFAULT TRUE,
--   push_opt      BOOLEAN NOT NULL DEFAULT TRUE,
--   inapp_opt     BOOLEAN NOT NULL DEFAULT TRUE,
--   created_at    TIMESTAMP DEFAULT NOW()
-- );