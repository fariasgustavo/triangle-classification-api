import TriangleHistoryModel from '../../infra/data/models/trinagle-history.model';
import TriangleHistoryRepositoryImp from '../../infra/repositories/triangle-history-imp.repository';
import TriangleHistoryResponse, {
  TriangleHistoryResponseItem,
} from '../entities/triangle-history-response.entity';
import TriangleHistory from '../entities/triangle-history.entity';

export default async function listTriangleHistory(): Promise<TriangleHistoryResponse> {
  const triangleHistoryRepository = new TriangleHistoryRepositoryImp(
    TriangleHistoryModel
  );

  const triangleHistory: TriangleHistory[] =
    await triangleHistoryRepository.findAll();
  const triangleHistoryResponseItens: TriangleHistoryResponseItem[] =
    triangleHistory.map((record) => ({
      ...record,
      date: new Date(record.date),
    }));

  return { list: triangleHistoryResponseItens };
}
