import { Generable } from '../../Components';
import { CommandParameterLiteral, ExecutorParameterLiteral, JobParameterLiteral } from '../../Components/Parameters/types/CustomParameterLiterals.types';
import { GenerableType } from '../../Config/exports/Mapping';
import { OrbDisplayMeta, OrbImportManifest } from '../types/Orb.types';
import { OrbRef } from './OrbRef';
/**
 * A reference to an imported Orb.
 * {@label STATIC_2.1}
 */
export declare class OrbImport implements Generable {
    alias: string;
    namespace: string;
    name: string;
    version: string;
    jobs: Record<string, OrbRef<JobParameterLiteral>>;
    commands: Record<string, OrbRef<CommandParameterLiteral>>;
    executors: Record<string, OrbRef<ExecutorParameterLiteral>>;
    description?: string;
    display?: OrbDisplayMeta;
    constructor(alias: string, namespace: string, orb: string, version: string, description?: string, manifest?: OrbImportManifest, display?: OrbDisplayMeta);
    generate(): Record<string, string>;
    get generableType(): GenerableType;
}
//# sourceMappingURL=OrbImport.d.ts.map