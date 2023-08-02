import { CustomParametersList } from '../../Components/Parameters';
import { AnyParameterLiteral } from '../../Components/Parameters/types/CustomParameterLiterals.types';
import { GenerableType } from '../../Config/exports/Mapping';
import { OrbImport } from './OrbImport';
/**
 * An abstract reference to an orb component.
 * {@label STATIC_2.1}
 */
export declare class OrbRef<Literal extends AnyParameterLiteral> {
    private _parameters;
    private _name;
    private _orb;
    constructor(name: string, parameters: CustomParametersList<Literal>, orb: OrbImport);
    get generableType(): GenerableType;
    get name(): string;
    get parameters(): CustomParametersList<Literal>;
    get orb(): OrbImport;
}
//# sourceMappingURL=OrbRef.d.ts.map