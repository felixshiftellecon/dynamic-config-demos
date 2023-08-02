import { ConditionOrValue } from '../../types';
import { Condition } from '../Condition';
import { And } from './And';
import { Equal } from './Equal';
import { Not } from './Not';
import { Or } from './Or';
import { Truthy } from './Truthy';
/**
 * If a value is passed, it will be wrapped by a truthy condition.
 * Otherwise, the condition's identity will be returned
 */
export declare function identityOrTruthy(conditionOrValue: ConditionOrValue): Condition;
export { Condition, And, Equal, Not, Or, Truthy };
//# sourceMappingURL=index.d.ts.map