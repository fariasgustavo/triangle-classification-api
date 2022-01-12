import DatabaseConnectionImp from '@src/infra/database/database-connection-imp';

const database = new DatabaseConnectionImp();
const dynamoDb = database.connection();

const tableName: string = process.env.DYNAMO_TABLE || '';

const UserSchema = new dynamoDb.Schema(
  {
    id: {
      type: String,
      hashKey: true,
      required: true,
    },
    nickname: {
      type: String,
      rangeKey: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = dynamoDb.model(tableName, UserSchema);

export default UserModel;
