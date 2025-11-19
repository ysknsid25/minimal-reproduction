import { Hono } from "hono";
import { httpInstrumentationMiddleware } from "@hono/otel";

const app = new Hono();

app.use("*", httpInstrumentationMiddleware());

app.get("/", (c) => {
    return c.text("Hello, Deno!");
});

Deno.serve(app.fetch);
