import TriangleHistoryModel from '../../infra/data/models/trinagle-history.model';
import TriangleHistoryRepositoryImp from '../../infra/repositories/triangle-history-imp.repository';
import TriangleHistory from '../entities/triangle-history.entity';
import TriangleType from '../entities/triangle-type.entity';
import Triangle from '../entities/triangle.entity';
import triangleType from '../use-cases/triangle-type';

export default async function createTriangleHistory(
  triangle: Triangle
): Promise<TriangleHistory> {
  const triangleHistoryRepository = new TriangleHistoryRepositoryImp(
    TriangleHistoryModel
  );

  const triangleTypeClassification: TriangleType = triangleType(triangle);

  const newTriangleHistory: TriangleHistory = {
    triangle: JSON.stringify(triangle),
    date: new Date().getTime(),
    classification: triangleTypeClassification.classification,
  };

  await triangleHistoryRepository.create(newTriangleHistory);

  return newTriangleHistory;
}
