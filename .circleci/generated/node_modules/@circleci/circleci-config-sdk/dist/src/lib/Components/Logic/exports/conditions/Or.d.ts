import { GenerableType } from '../../../../Config/exports/Mapping';
import { ConditionOrValue, OrConditionShape } from '../../types';
import { Condition } from '../Condition';
/**
 * True if any argument is truthy.
 * @see {@link https://circleci.com/docs/configuration-reference#logic-statements}
 */
export declare class Or extends Condition {
    conditions: Condition[];
    constructor(conditions: ConditionOrValue[]);
    evaluate(): boolean;
    generate(): OrConditionShape;
    get generableType(): GenerableType;
}
//# sourceMappingURL=Or.d.ts.map