import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import Triangle from '../../domain/entities/triangle.entity';
import createTriangleHistory from '../../domain/services/create-triangle-history.service';
import listTriangleHistory from '../../domain/services/list-triangle-history.service';
import TriangleHistoryResponse from '../../domain/entities/triangle-history-response.entity';
import TriangleHistory from '../../domain/entities/triangle-history.entity';

export const classification = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  console.info('event: ', event);

  try {
    if (!event.body)
      return {
        body: JSON.stringify([
          { message: 'Request body parameter is required.' },
        ]),
        statusCode: 400,
      };

    const triangle: Triangle = JSON.parse(event.body);

    if (Object.keys(triangle).length < 3)
      return {
        body: JSON.stringify([
          { message: 'Triangle parameters needs three sides (a,b and c).' },
        ]),
        statusCode: 400,
      };

    const newTriangleHistory: TriangleHistory = await createTriangleHistory(
      triangle
    );

    return {
      body: JSON.stringify([
        {
          message: 'Triangle Classification has been created!',
          triangle: {
            ...newTriangleHistory,
            date: new Date(newTriangleHistory.date),
          },
        },
      ]),
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

export const history = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  console.info('event: ', event);
  try {
    const triangleHistoryResponse: TriangleHistoryResponse =
      await listTriangleHistory();

    return {
      body: JSON.stringify([
        {
          ...triangleHistoryResponse,
        },
      ]),
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
