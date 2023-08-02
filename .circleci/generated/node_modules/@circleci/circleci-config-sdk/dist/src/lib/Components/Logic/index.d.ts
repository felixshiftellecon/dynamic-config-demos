import { And, Equal, Not, Or } from './exports/conditions';
import { ConditionOrValue, ConditionValue } from './types';
export declare function and(...conditions: ConditionOrValue[]): And;
export declare function or(...conditions: ConditionOrValue[]): Or;
export declare function equal(...values: ConditionValue[]): Equal;
export declare function not(condition: ConditionOrValue): Not;
/**
 * Conditional classes and utility functions
 */
export * as conditional from './exports/conditions';
export { When } from './exports/When';
//# sourceMappingURL=index.d.ts.map