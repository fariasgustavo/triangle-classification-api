# Triangle Classification

## 1. Setup AWS Credentials

First of all, is require to configure AWS credentials to run this application. It can be set as environment variables:

- `export AWS_ACCESS_KEY_ID=<your-key-here>`
- `export AWS_SECRET_ACCESS_KEY=<your-secret-key-here>`

## 2. Deploy Serverless

The serverless infrastructure is deployed by `serverless.yml`. In order to deploy the application, just run `npm run deploy:dev`. It will set up `DyanmoDB`, `Lambda Function` and `API Gateway` services in your AWS Console Account.

## 3. Run API locally

In order to run the endpoints locally, just run `npm run start:dev`. It will provide an output with the two endpoints of whole application:

- `GET http://localhost:3000/local/triangle/history`
- `POST http://localhost:3000/local/triangle/classification`

`POST http://localhost:3000/local/triangle/classification` require a body request like this:

```
{
  "a": 11,
  "b": 12,
  "c": 10
}
```

## 4. Tests

The application only has `unit tests` to ensure the correct behavior of `triangle classification use case`.
In order to run the tests suits: `npm run test:coverage`.
