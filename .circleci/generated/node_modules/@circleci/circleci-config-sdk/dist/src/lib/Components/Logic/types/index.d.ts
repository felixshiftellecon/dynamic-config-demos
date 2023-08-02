import { Condition } from '../exports/conditions';
export declare type AndConditionShape = {
    and: AnyConditionShape[];
};
export declare type OrConditionShape = {
    or: AnyConditionShape[];
};
export declare type NotConditionShape = {
    not: AnyConditionShape;
};
export declare type EqualConditionShape = {
    equal: unknown[];
};
export declare type AnyConditionShape = AndConditionShape | OrConditionShape | NotConditionShape | EqualConditionShape | unknown;
export declare type ConditionValue = string | boolean | number;
export declare type ConditionOrValue = Condition | ConditionValue;
//# sourceMappingURL=index.d.ts.map