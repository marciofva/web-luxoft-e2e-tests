# pull image
FROM cypress/included:10.6.0

# make directory inside container
RUN mkdir /app
WORKDIR /app

# copy cypress code from host to container
COPY . /app

# install package
RUN npm install

# Verify cypress installation
RUN $(npm bin)/cypress verify

ENTRYPOINT [ "npm",  "run" ]
