import Triangle from '../entities/triangle.entity';
import TriangleType, {
  TriangleClassification,
} from '../entities/triangle-type.entity';

const isEquilateral = (triangleValues: number[]): boolean => {
  return triangleValues.every((value) => value === triangleValues[0]);
};

const isScalene = (triangleValues: number[]): boolean => {
  const uniqueTriangleValues = new Set(triangleValues);

  if (uniqueTriangleValues.size === triangleValues.length) return true;

  return false;
};

/** Traiangle's classification type
 *
 * @param triangle - an object that contains the traiangle's three sides
 * @returns triangle classification type (EQUILATERAL, SCALENE or ISOSCELES)
 */
export default function triangleType(triangle: Triangle): TriangleType {
  const triangleValues: number[] = Object.values(triangle);

  if (isEquilateral(triangleValues))
    return { classification: TriangleClassification.EQUILATERAL };

  if (isScalene(triangleValues))
    return { classification: TriangleClassification.SCALENE };

  return { classification: TriangleClassification.ISOSCELES };
}
