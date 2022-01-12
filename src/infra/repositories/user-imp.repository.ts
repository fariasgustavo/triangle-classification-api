import User from '@src/domain/entities/user.entity';
import UserRepository from '@src/domain/repositories/user.repository';
import UserModel from '@src/infra/data/models/user.model';

export default class UserRepositoryImp implements UserRepository {
  constructor(private readonly userModel: typeof UserModel) {}

  findOne(userId: string): Promise<User> {
    return this.userModel.query('id').eq(userId).all().exec();
  }

  async create(user: User): Promise<void> {
    await this.userModel.create(user);
  }
}
