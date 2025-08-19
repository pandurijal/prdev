import { neon } from '@neondatabase/serverless';

interface Env {
  DATABASE_URL: string;
}

interface EmailCaptureRequest {
  email: string;
}

interface FormSubmissionRequest {
  name: string;
  email: string;
  subject: string;
  details: string;
}

interface EmailCaptureData {
  email: string;
  product?: string;
  source?: string;
  user_agent?: string;
  ip_address?: string;
  country?: string;
}

interface FormSubmissionData {
  name: string;
  email: string;
  subject: string;
  details: string;
  product?: string;
  source?: string;
  user_agent?: string;
  ip_address?: string;
  country?: string;
}

// Email validation function
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Get country from IP (simplified - you might want to use a proper IP geolocation service)
function getCountryFromIP(ip: string): string {
  // For now, return 'US' as default. In production, use CloudFlare's CF-IPCountry header
  return 'US';
}

// Extract product from referrer or user agent
function extractProduct(referrer: string, userAgent: string): string {
  if (referrer.includes('deepertalk')) return 'Deepertalk.app';
  if (referrer.includes('mentalmath')) return 'MentalMathPractice.com';
  if (referrer.includes('tesiq')) return 'TesIQ.id';
  if (referrer.includes('tesmbti')) return 'TesMBTI.id';
  if (referrer.includes('tesmental')) return 'TesMental.id';
  if (referrer.includes('teskoran')) return 'TesKoran.id';
  if (referrer.includes('tesbutawarna')) return 'TesButaWarna.id';
  if (referrer.includes('tesmengetik')) return 'TesMengetik.id';
  if (referrer.includes('teskeyboard')) return 'TesKeyboard.id';
  if (referrer.includes('belajarbahasajepang')) return 'BelajarBahasaJepang.id';
  if (referrer.includes('belajarbahasakorea')) return 'BelajarBahasaKorea.id';
  if (referrer.includes('thingstodo')) return 'Thingstodo.id';
  if (referrer.includes('pasfoto')) return 'Pasfoto.id';
  if (referrer.includes('teskecepatan')) return 'TesKecepatanInternet.id';
  if (referrer.includes('prdev.io')) return 'PRDEV Website';
  return 'Unknown';
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }
    
    if (url.pathname === '/') {
      return new Response('API is running!', { status: 200, headers: corsHeaders });
    }
    
    if (url.pathname === '/api/email-capture' && request.method === 'POST') {
      try {
        const sql = neon(env.DATABASE_URL);
        
        // Parse request body
        const body: EmailCaptureRequest = await request.json();
        
        // Validate email
        if (!body.email || !isValidEmail(body.email)) {
          return new Response(
            JSON.stringify({ error: 'Valid email is required' }),
            { 
              status: 400, 
              headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
          );
        }
        
        // Extract metadata
        const referrer = request.headers.get('Referer') || '';
        const userAgent = request.headers.get('User-Agent') || '';
        const ipAddress = request.headers.get('CF-Connecting-IP') || 
                         request.headers.get('X-Forwarded-For') || 
                         'unknown';
        const country = request.headers.get('CF-IPCountry') || getCountryFromIP(ipAddress);
        const product = extractProduct(referrer, userAgent);
        
        const captureData: EmailCaptureData = {
          email: body.email.toLowerCase().trim(),
          product,
          source: referrer,
          user_agent: userAgent,
          ip_address: ipAddress,
          country: country
        };
        
        // Insert into database
        await sql`
          INSERT INTO email_captures (email, product, source, user_agent, ip_address, country)
          VALUES (${captureData.email}, ${captureData.product}, ${captureData.source}, 
                  ${captureData.user_agent}, ${captureData.ip_address}, ${captureData.country})
        `;
        
        return new Response(
          JSON.stringify({ 
            success: true, 
            message: 'Email captured successfully' 
          }),
          { 
            status: 200, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
        
      } catch (error) {
        console.error('Email capture error:', error);
        return new Response(
          JSON.stringify({ 
            error: 'Failed to capture email' 
          }),
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }
    }
    
    if (url.pathname === '/api/form-submission' && request.method === 'POST') {
      try {
        const sql = neon(env.DATABASE_URL);
        
        // Parse request body
        const body: FormSubmissionRequest = await request.json();
        
        // Validate required fields
        if (!body.name || body.name.trim().length === 0) {
          return new Response(
            JSON.stringify({ error: 'Name is required' }),
            { 
              status: 400, 
              headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
          );
        }
        
        if (!body.email || !isValidEmail(body.email)) {
          return new Response(
            JSON.stringify({ error: 'Valid email is required' }),
            { 
              status: 400, 
              headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
          );
        }
        
        if (!body.subject || body.subject.trim().length === 0) {
          return new Response(
            JSON.stringify({ error: 'Subject is required' }),
            { 
              status: 400, 
              headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
          );
        }
        
        if (!body.details || body.details.trim().length === 0) {
          return new Response(
            JSON.stringify({ error: 'Details are required' }),
            { 
              status: 400, 
              headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
          );
        }
        
        // Extract metadata
        const referrer = request.headers.get('Referer') || '';
        const userAgent = request.headers.get('User-Agent') || '';
        const ipAddress = request.headers.get('CF-Connecting-IP') || 
                         request.headers.get('X-Forwarded-For') || 
                         'unknown';
        const country = request.headers.get('CF-IPCountry') || getCountryFromIP(ipAddress);
        const product = extractProduct(referrer, userAgent);
        
        const submissionData: FormSubmissionData = {
          name: body.name.trim(),
          email: body.email.toLowerCase().trim(),
          subject: body.subject.trim(),
          details: body.details.trim(),
          product,
          source: referrer,
          user_agent: userAgent,
          ip_address: ipAddress,
          country: country
        };
        
        // Insert into database
        await sql`
          INSERT INTO form_submissions (name, email, subject, details, product, source, user_agent, ip_address, country)
          VALUES (${submissionData.name}, ${submissionData.email}, ${submissionData.subject}, ${submissionData.details}, 
                  ${submissionData.product}, ${submissionData.source}, ${submissionData.user_agent}, 
                  ${submissionData.ip_address}, ${submissionData.country})
        `;
        
        return new Response(
          JSON.stringify({ 
            success: true, 
            message: 'Form submitted successfully' 
          }),
          { 
            status: 200, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
        
      } catch (error) {
        console.error('Form submission error:', error);
        return new Response(
          JSON.stringify({ 
            error: 'Failed to submit form' 
          }),
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }
    }
    
    return new Response('Not Found', { 
      status: 404, 
      headers: corsHeaders 
    });
  },
};