import { Hono } from "hono";
import { httpInstrumentationMiddleware } from "@hono/otel";

const app = new Hono();

const instrumentationConfig = {
    serviceName: "my-service",
    serviceVersion: "1.0.0",
    captureRequestHeaders: ["user-agent", "service-name"],
};
app.use(httpInstrumentationMiddleware(instrumentationConfig));

app.get("/", (c) => {
    return c.text("Hello, Deno!");
});

Deno.serve(app.fetch);
