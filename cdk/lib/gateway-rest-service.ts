import { Construct } from 'constructs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as path from 'path';
import { Stack, StackProps } from 'aws-cdk-lib';
import { JsonSchemaType, JsonSchemaVersion } from 'aws-cdk-lib/aws-apigateway';

export default class GatewayRestService extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new dynamodb.Table(this, 'triangle-classification-historic', {
      tableName: 'triangle-classification-historic',
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'date', type: dynamodb.AttributeType.STRING },
    });

    const handler = new lambda.Function(this, 'Triangle Classification', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset(
        path.join(__dirname, '/../../build/presenters')
      ),
      handler: 'triangle.classification',
    });

    const api = new apigateway.RestApi(this, 'triangle-classification-api', {
      restApiName: 'Triangle Classification Service',
      defaultCorsPreflightOptions: {
        allowHeaders: [
          'Content-Type',
          'X-Amz-Date',
          'Authorization',
          'X-Api-Key',
        ],
        allowMethods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        allowCredentials: true,
        allowOrigins: ['*'],
      },
    });

    const apiLambdaIntegration = new apigateway.LambdaIntegration(handler, {
      requestTemplates: { 'application/json': '{ "statusCode": "200" }' },
    });

    const triangleClassification = api.root.addResource('classification');
    const triangleClassificationRequestValidatorModel = api.addModel(
      'TriangleClassificationValidatorModel',
      {
        contentType: 'application/json',
        modelName: 'TriangleClassificationValidatorModel',
        schema: {
          schema: JsonSchemaVersion.DRAFT4,
          title: 'TriangleClassificationValidatorModelSchema',
          type: JsonSchemaType.OBJECT,
          properties: {
            a: { type: JsonSchemaType.NUMBER },
            b: { type: JsonSchemaType.NUMBER },
            c: { type: JsonSchemaType.NUMBER },
          },
          required: ['a', 'b', 'c'],
        },
      }
    );
    const triangleClassificationRequestValidator = api.addRequestValidator(
      'TriangleClassificationValidator',
      {
        validateRequestBody: true,
      }
    );

    triangleClassification.addMethod('POST', apiLambdaIntegration, {
      requestModels: {
        'application/json': triangleClassificationRequestValidatorModel,
      },
      requestValidator: triangleClassificationRequestValidator,
    });
  }
}
