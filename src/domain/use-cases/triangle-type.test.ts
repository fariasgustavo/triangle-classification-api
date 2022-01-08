import { triangleType } from '@src/domain/use-cases/triangle-type';
import TriangleType, {
  TriangleClassification,
} from '@src/domain/entities/triangle-type.entity';
import Triangle from '@src/domain/entities/triangle.entity';

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
});
