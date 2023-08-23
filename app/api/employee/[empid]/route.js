export async function GET(request, { params }) {
  const employeeId = params.empid;

  return new Response(`The employee id ${employeeId}`)
}