import TriangleHistory from '@src/domain/entities/triangle-history.entity';
import TriangleHistoryRepository from '@src/domain/repositories/triangle-history.repository';
import TriangleHistoryModel from '../data/models/trinagle-history.model';

export default class TriangleHistoryRepositoryImp
  implements TriangleHistoryRepository
{
  constructor(
    private readonly triangleHistoryModel: typeof TriangleHistoryModel
  ) {}

  findAll(): Promise<TriangleHistory> {
    return this.triangleHistoryModel.scan().all().exec();
  }

  findByUser(userId: string): Promise<TriangleHistory> {
    return this.triangleHistoryModel.query('userId').eq(userId).all().exec();
  }
}
