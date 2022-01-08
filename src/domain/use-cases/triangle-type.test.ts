import { triangleType } from '@src/domain/use-cases/triangle-type';
import TriangleType from '@src/domain/entities/triangle-type.entity';
import Triangle from '../entities/triangle.entity';

describe('Triangle type use case', () => {
  it("Given a triangle that has all three sides the same length, should return classification: 'equilateral'", () => {
    const params: Triangle = {
      a: 10,
      b: 10,
      c: 10,
    };
    const result: TriangleType = triangleType(params);

    expect(result).toStrictEqual({ classification: 'equilateral' });
  });
});
