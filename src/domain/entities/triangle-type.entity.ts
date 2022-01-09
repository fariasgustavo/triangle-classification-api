export enum TriangleClassification {
  EQUILATERAL = 'equilateral',
  ISOSCELES = 'isosceles',
  SCALENE = 'scalene,',
}

export default interface TriangleType {
  classification: TriangleClassification;
}
