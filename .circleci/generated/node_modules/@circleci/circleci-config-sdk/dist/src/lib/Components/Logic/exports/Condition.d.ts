import { Generable } from '../..';
import { GenerableType } from '../../../Config/exports/Mapping';
import { AnyConditionShape } from '../types';
import { Evaluable } from './Evaluable';
export declare abstract class Condition implements Generable, Evaluable<boolean> {
    abstract evaluate(): boolean;
    abstract generate(flatten?: boolean): AnyConditionShape;
    abstract get generableType(): GenerableType;
}
//# sourceMappingURL=Condition.d.ts.map