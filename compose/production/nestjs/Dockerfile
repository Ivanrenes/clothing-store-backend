FROM node:14.17.6 as node

# Node build stage
FROM node as node-build-stage

RUN apt update -y -qq && apt install -y -qq git python build-essential

# Install app's dependencies
WORKDIR /dependencies/
ADD package*.json /dependencies/
RUN npm ci

# Node 'run' stage
FROM node as node-run-stage

WORKDIR /app/

COPY --from=node-build-stage /dependencies/node_modules  /app/node_modules

COPY ./compose/production/nestjs/entrypoint /app/entrypoint
RUN sed -i 's/\r$//g' /app/entrypoint
RUN chmod +x /app/entrypoint

COPY ./compose/production/nestjs/start /app/start
RUN sed -i 's/\r$//g' /app/start
RUN chmod +x /app/start

# Copy the app's code into the container
COPY . .

RUN ls

ENTRYPOINT ["/app/entrypoint"]
