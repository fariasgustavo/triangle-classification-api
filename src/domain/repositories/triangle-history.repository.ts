import TriangleHistory from '../entities/triangle-history.entity';

export default interface TriangleHistoryRepository {
  findAll(): Promise<TriangleHistory>;
  findByUser(userId: string): Promise<TriangleHistory>;
  create(triangleHistory: TriangleHistory): Promise<void>;
}
