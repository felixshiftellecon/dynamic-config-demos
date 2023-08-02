import { Generable } from '../../Components';
import { GenerableType, ParameterizedComponent, ParameterSubtype } from '../exports/Mapping';
interface _SchemaObject {
    $id?: string;
    $schema?: string;
    [x: string]: unknown;
}
export interface SchemaObject extends _SchemaObject {
    $id?: string;
    $schema?: string;
    $async?: false;
    [x: string]: unknown;
}
export declare type GenerableSubtypes = ParameterSubtype | ParameterizedComponent;
export declare type GenerableSubTypesMap = {
    [GenerableType.CUSTOM_PARAMETER]: {
        [key in GenerableSubtypes]: SchemaObject;
    };
    [GenerableType.CUSTOM_PARAMETERS_LIST]: {
        [key in ParameterizedComponent]: SchemaObject;
    };
};
export declare type OneOrMoreGenerable = Generable | Generable[];
export {};
//# sourceMappingURL=Mapping.types.d.ts.map