import { currentDateToString } from '../infra/utils/date.utils';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import TriangleHistoryRepositoryImp from '../infra/repositories/triangle-history-imp.repository';
import TriangleHistoryModel from '../infra/data/models/trinagle-history.model';
import TriangleHistory from '../domain/entities/triangle-history.entity';
import triangleType from '../domain/use-cases/triangle-type';
import Triangle from '../domain/entities/triangle.entity';
import TriangleType from '../domain/entities/triangle-type.entity';

export const classification = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  console.info('event: ', event);

  try {
    const { body } = event;

    if (!body)
      return {
        body: JSON.stringify([{ message: 'Hello AWS CDK' }]),
        statusCode: 400,
      };

    const triangleHistoryRepository = new TriangleHistoryRepositoryImp(
      TriangleHistoryModel
    );

    const triangle: Triangle = JSON.parse(body);
    const triangleTypeClassification: TriangleType = triangleType(triangle);

    const newTriangleHistory: TriangleHistory = {
      triangle: body,
      date: currentDateToString(),
      userId: '123dfsujn',
      classification: triangleTypeClassification.classification,
    };

    await triangleHistoryRepository.create(newTriangleHistory);

    return {
      body: JSON.stringify([{ message: 'Triangle Classification has been stored!', triangleHistory: newTriangleHistory }]),
      statusCode: 200,
    };
  } catch (error) {
    console.error({ error });

    return {
      body: JSON.stringify([{ message: 'Internal Server Error' }]),
      statusCode: 500,
    };
  }
};

export const history = (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {

  } catch(error) {
    
  }
}