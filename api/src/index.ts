import { neon } from '@neondatabase/serverless';

interface Env {
  DATABASE_URL: string;
}

interface EmailCaptureRequest {
  email: string;
}

interface EmailCaptureData {
  email: string;
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
  if (referrer.includes('tesmenugetik')) return 'TesMenugetik.id';
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
    
    return new Response('Not Found', { 
      status: 404, 
      headers: corsHeaders 
    });
  },
};