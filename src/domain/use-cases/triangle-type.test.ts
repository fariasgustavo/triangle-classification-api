import TriangleType, {
  TriangleClassification,
} from '../entities/triangle-type.entity';
import Triangle from '../entities/triangle.entity';
import triangleType from './triangle-type';

describe('Triangle type use case', () => {
  it("Given a triangle that has all three sides the same length, should return classification: 'equilateral'", () => {
    const params: Triangle = {
      a: 10,
      b: 10,
      c: 10,
    };
    const result: TriangleType = triangleType(params);

    expect(result).toStrictEqual({
      classification: TriangleClassification.EQUILATERAL,
    });
  });

  it("Given a triangle that has all sides of different lengths, should return classification: 'scalene'", () => {
    const params: Triangle = {
      a: 5,
      b: 10,
      c: 15,
    };
    const result: TriangleType = triangleType(params);

    expect(result).toStrictEqual({
      classification: TriangleClassification.SCALENE,
    });
  });

  it("Given a triangle that has at least two sides the same length, should return classification: 'isosceles'", () => {
    const params: Triangle = {
      a: 10,
      b: 10,
      c: 15,
    };
    const result: TriangleType = triangleType(params);

    expect(result).toStrictEqual({
      classification: TriangleClassification.ISOSCELES,
    });
  });
});
