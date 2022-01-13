import User from '../entities/user.entity';

export default interface UserRepository {
  findOne(userId: string): Promise<User>;
  create(user: User): Promise<void>;
}
