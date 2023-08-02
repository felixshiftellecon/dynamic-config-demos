import { GenerableType } from '../../../../Config/exports/Mapping';
import { ConditionValue, EqualConditionShape } from '../../types';
import { Condition } from '../Condition';
/**
 * True if all arguments evaluate to equal values.
 * @see {@link https://circleci.com/docs/configuration-reference#logic-statements}
 */
export declare class Equal extends Condition {
    private values;
    constructor(values: ConditionValue[]);
    /**
     * Ensure each condition is equal
     * @returns whether all conditions are equal
     */
    evaluate(): boolean;
    generate(): EqualConditionShape;
    get generableType(): GenerableType;
}
//# sourceMappingURL=Equal.d.ts.map