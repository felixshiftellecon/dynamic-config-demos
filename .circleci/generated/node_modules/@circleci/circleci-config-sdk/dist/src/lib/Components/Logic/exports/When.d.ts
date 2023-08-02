import { Generable } from '../..';
import { GenerableType } from '../../../Config/exports/Mapping';
import { AnyConditionShape } from '../types';
import { Condition } from './Condition';
/**
 * 2.1 Conditional logic class component.
 */
export declare class When implements Generable {
    condition: Condition;
    constructor(condition: Condition);
    generate(): AnyConditionShape;
    get generableType(): GenerableType;
}
//# sourceMappingURL=When.d.ts.map