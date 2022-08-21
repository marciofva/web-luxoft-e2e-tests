# Cypress 
---

Web UI testing using Cypress


### Install Cypress

```
npm install cypress --save-dev
```


### Install all dependencies

```
npm install
```


### Running the tests

- Open cypress interface:
```
npm run cy:open
```

- Chrome browser:
```
npm run cy:runChromeProd
```

- Firefox browser:
```
npm run cy:runFirefoxProd
```

- Headless mode:
```
npm run cy:runChromeProdHeadless
```


### Using Docker to run the tests

Cypress provides public [docker images](https://hub.docker.com/u/cypress) to run the tests. So, The docker image that will be used is "_cypress/included_"


- Dockerfile
```
docker build -t cypress-docker-image-e2e-tests .
```

- Docker Compose - To run the tests on _chrome_ and _firefox_ browsers in parallel
```
docker-compose up
```

- Docker Compose - To run the tests using a specific browser passing the service name as an argument, such as:
```
docker-compose up chrome
docker-compose up firefox
```
