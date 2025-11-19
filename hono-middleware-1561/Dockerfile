FROM denoland/deno:2.5.4

WORKDIR /app

COPY deno.jsonc .

COPY main.ts .

RUN deno cache main.ts

EXPOSE 8000

CMD ["run", "-A", "main.ts"]
