import figlet from "figlet";

const server = Bun.serve({
  fetch() {
    const body = figlet.textSync('Yo what FUN! Test test');
    return new Response(body);
  },
  port: 3000,
});