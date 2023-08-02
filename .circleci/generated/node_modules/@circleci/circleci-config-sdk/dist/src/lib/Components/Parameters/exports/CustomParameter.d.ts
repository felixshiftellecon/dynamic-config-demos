import { Generable } from '../..';
import { GenerableType } from '../../../Config/exports/Mapping';
import { CustomParameterContentsShape, CustomParameterShape } from '../types';
import { AnyParameterLiteral } from '../types/CustomParameterLiterals.types';
/**
 * Accepted parameters can be assigned to a component.
 * This is the type definition of the parameter, and does not store the value.
 * Components which accept parameters will have a {@link defineParameter} implementation.
 *
 * @param name - The name of the parameter.
 * @param type - The type of the parameter.
 * If using an enum, use the {@link CustomEnumParameter} class.
 * @param defaultValue - The default value of the parameter.
 * @param description - A description of the parameter.
 *
 */
export declare class CustomParameter<ParameterTypeLiteral extends AnyParameterLiteral> implements Generable {
    name: string;
    type: ParameterTypeLiteral;
    defaultValue?: unknown;
    description?: string;
    constructor(name: string, type: ParameterTypeLiteral, defaultValue?: unknown, description?: string);
    generate(): CustomParameterShape<ParameterTypeLiteral>;
    generateContents(): CustomParameterContentsShape<ParameterTypeLiteral>;
    get generableType(): GenerableType;
}
//# sourceMappingURL=CustomParameter.d.ts.map