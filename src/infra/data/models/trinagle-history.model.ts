import DatabaseConnectionImp from '../../database/database-connection-imp';

const database = new DatabaseConnectionImp();
const dynamoDb = database.connection();

const tableName: string = process.env.TRIANGLE_CLASSIFICATION_TABLE || '';

const TriangleHistorySchema = new dynamoDb.Schema(
  {
    date: {
      type: Number,
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
