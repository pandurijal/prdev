-- Email capture table for lead generation
CREATE TABLE email_captures (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  product VARCHAR(100), -- auto-detected from referrer/URL
  source VARCHAR(100), -- referrer URL
  timestamp TIMESTAMP DEFAULT NOW(),
  user_agent TEXT,
  ip_address INET,
  country VARCHAR(3) -- derived from IP
);

-- Add index for email lookups
CREATE INDEX idx_email_captures_email ON email_captures(email);

-- Add index for timestamp (for analytics)
CREATE INDEX idx_email_captures_timestamp ON email_captures(timestamp);