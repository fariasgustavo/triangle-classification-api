import Triangle from '@src/domain/entities/triangle.entity';
import TriangleType, {
  TriangleClassification,
} from '@src/domain/entities/triangle-type.entity';

export const triangleType = (triangle: Triangle): TriangleType => {
  const triangleValues: number[] = Object.values(triangle);

  if (isEquilateral(triangleValues))
    return { classification: TriangleClassification.EQUILATERAL };

  return { classification: TriangleClassification.SCALENE };
};

const isEquilateral = (triangleValues: number[]): boolean => {
  return triangleValues.every((value) => value === triangleValues[0]);
};
