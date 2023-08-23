export async function GET(request) {
  return new Response(JSON.stringify({'greeting': 'Hello'}))
}