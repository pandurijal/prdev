export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    
    if (url.pathname === '/') {
      return new Response('API is running!', { status: 200 });
    }
    
    return new Response('Not Found', { status: 404 });
  },
};

interface Env {
  // Add your environment bindings here
}