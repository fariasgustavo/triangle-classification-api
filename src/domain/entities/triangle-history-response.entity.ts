export type TriangleHistoryResponseItem = {
  readonly date: Date;
  readonly classification: string;
  readonly triangle: string;
};

export default interface TriangleHistoryResponse {
  list: TriangleHistoryResponseItem[];
}
