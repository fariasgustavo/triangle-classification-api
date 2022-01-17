import TriangleHistory from '../../domain/entities/triangle-history.entity';
import TriangleHistoryRepository from '../../domain/repositories/triangle-history.repository';
import TriangleHistoryModel from '../data/models/trinagle-history.model';

export default class TriangleHistoryRepositoryImp
  implements TriangleHistoryRepository
{
  constructor(
    private readonly triangleHistoryModel: typeof TriangleHistoryModel
  ) {}

  async findAll(): Promise<TriangleHistory[]> {
    const allRecords: TriangleHistory[] = await this.triangleHistoryModel
      .scan()
      .all()
      .exec();

    return allRecords.sort((a: TriangleHistory, b: TriangleHistory) => {
      return a.date - b.date;
    });
  }

  async create(triangleHistory: TriangleHistory): Promise<void> {
    await this.triangleHistoryModel.create(triangleHistory);
  }
}
