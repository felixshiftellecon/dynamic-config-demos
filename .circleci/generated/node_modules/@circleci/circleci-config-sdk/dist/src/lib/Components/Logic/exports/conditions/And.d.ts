import { GenerableType } from '../../../../Config/exports/Mapping';
import { AndConditionShape, ConditionOrValue } from '../../types';
import { Condition } from '../Condition';
/**
 *  True if all arguments are truthy.
 *  @see {@link https://circleci.com/docs/configuration-reference#logic-statements}
 */
export declare class And extends Condition {
    conditions: Condition[];
    constructor(conditions: ConditionOrValue[]);
    evaluate(): boolean;
    generate(): AndConditionShape;
    get generableType(): GenerableType;
}
//# sourceMappingURL=And.d.ts.map