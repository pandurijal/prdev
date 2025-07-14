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

-- Form submissions table for contact form
CREATE TABLE form_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(500) NOT NULL,
  details TEXT NOT NULL,
  product VARCHAR(100), -- auto-detected from referrer/URL
  source VARCHAR(100), -- referrer URL
  timestamp TIMESTAMP DEFAULT NOW(),
  user_agent TEXT,
  ip_address INET,
  country VARCHAR(3), -- derived from IP
  status VARCHAR(20) DEFAULT 'new' -- new, read, replied
);

-- Add indexes for form submissions
CREATE INDEX idx_form_submissions_email ON form_submissions(email);
CREATE INDEX idx_form_submissions_timestamp ON form_submissions(timestamp);
CREATE INDEX idx_form_submissions_status ON form_submissions(status);