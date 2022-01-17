import TriangleHistory from '../entities/triangle-history.entity';

export default interface TriangleHistoryRepository {
  findAll(): Promise<TriangleHistory[]>;
  create(triangleHistory: TriangleHistory): Promise<void>;
}
