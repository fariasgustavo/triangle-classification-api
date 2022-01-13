import { dynamodbAdapter } from './adapters/dynamodb.adapter';
import DatabaseConnection from './database-connection';

export default class DatabaseConnectionImp implements DatabaseConnection {
  connection() {
    return dynamodbAdapter();
  }
}
