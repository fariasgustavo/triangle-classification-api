import Triangle from '@src/domain/entities/triangle.entity';
import TriangleType, {
  TriangleClassification,
} from '@src/domain/entities/triangle-type.entity';

export const triangleType = (triangle: Triangle): TriangleType => {
  const triangleValues: number[] = Object.values(triangle);

  if (isEquilateral(triangleValues))
    return { classification: TriangleClassification.EQUILATERAL };

  if (isScalene(triangleValues))
    return { classification: TriangleClassification.SCALENE };

  return { classification: TriangleClassification.ISOSCELES };
};

const isEquilateral = (triangleValues: number[]): boolean => {
  return triangleValues.every((value) => value === triangleValues[0]);
};

const isScalene = (triangleValues: number[]): boolean => {
  const uniqueTriangleValues = new Set(triangleValues);

  if (uniqueTriangleValues.size === triangleValues.length) return true;

  return false;
};
