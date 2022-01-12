import DatabaseConnectionImp from '@src/infra/database/database-connection-imp';

const database = new DatabaseConnectionImp();
const dynamoDb = database.connection();

const tableName: string = process.env.DYNAMO_TABLE || '';

const TriangleHistorySchema = new dynamoDb.Schema(
  {
    id: {
      type: String,
      hashKey: true,
      required: true,
    },
    date: {
      type: String,
      rangeKey: true,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    classification: {
      type: String,
      required: true,
    },
    triangle: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TriangleHistoryModel = dynamoDb.model(tableName, TriangleHistorySchema);

export default TriangleHistoryModel;
