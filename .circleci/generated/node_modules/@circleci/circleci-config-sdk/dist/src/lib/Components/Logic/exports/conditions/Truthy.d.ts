import { GenerableType } from '../../../../Config/exports/Mapping';
import { ConditionValue } from '../../types';
import { Condition } from '../Condition';
export declare class Truthy extends Condition {
    private value?;
    constructor(value?: ConditionValue | undefined);
    evaluate(): boolean;
    generate(): ConditionValue | undefined;
    get generableType(): GenerableType;
}
//# sourceMappingURL=Truthy.d.ts.map