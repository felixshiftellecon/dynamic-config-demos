import { CustomParameter } from '..';
import { Generable } from '../..';
import { GenerableType } from '../../../Config/exports/Mapping';
import { AnyParameterLiteral } from '../types/CustomParameterLiterals.types';
import { CustomParametersListShape } from '../types';
/**
 * A list that can be added to a component.
 *
 * For use in {@link ParameterizedComponent}
 *
 * {@label STATIC_2.1}
 */
export declare class CustomParametersList<ParameterTypeLiteral extends AnyParameterLiteral> implements Generable {
    parameters: CustomParameter<ParameterTypeLiteral>[];
    constructor(parameters?: CustomParameter<ParameterTypeLiteral>[]);
    generate(): CustomParametersListShape;
    [Symbol.iterator](): IterableIterator<CustomParameter<ParameterTypeLiteral>>;
    /**
     * Define a parameter to be available to the workflow job. Useful for static configurations.
     * @param name - name of the parameter
     * @param type - the literal type of the parameter
     * @param defaultValue - optional default value of parameter. If this is not provided, the parameter will be required.
     * @param description - optional description of parameter
     * @param enumValues - list of selectable enum values. Only applicable for enum type parameters.
     * @returns this for chaining
     */
    define(name: string, type: ParameterTypeLiteral, defaultValue?: unknown, description?: string, enumValues?: string[]): CustomParameter<ParameterTypeLiteral>;
    get generableType(): GenerableType;
}
//# sourceMappingURL=CustomParameterList.d.ts.map