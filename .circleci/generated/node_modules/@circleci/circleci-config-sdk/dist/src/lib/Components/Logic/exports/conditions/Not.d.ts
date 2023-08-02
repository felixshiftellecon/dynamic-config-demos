import { GenerableType } from '../../../../Config/exports/Mapping';
import { ConditionOrValue, NotConditionShape } from '../../types';
import { Condition } from '../Condition';
/**
 * True the argument is not truthy.
 * @see {@link https://circleci.com/docs/configuration-reference#logic-statements}
 */
export declare class Not extends Condition {
    condition: Condition;
    constructor(condition: ConditionOrValue);
    evaluate(): boolean;
    generate(): NotConditionShape;
    get generableType(): GenerableType;
}
//# sourceMappingURL=Not.d.ts.map