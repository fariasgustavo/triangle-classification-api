import DatabaseConnectionImp from '../../database/database-connection-imp';

const database = new DatabaseConnectionImp();
const dynamoDb = database.connection();

const tableName = 'triangle-classification-historic';

const TriangleHistorySchema = new dynamoDb.Schema(
  {
    userId: {
      type: String,
      hashKey: true,
      required: true,
    },
    date: {
      type: String,
      rangeKey: true,
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
