import { CustomParametersList } from '../../Components/Parameters';
import { Parameterized } from '../../Components/Parameters/exports/Parameterized';
import { AnyParameterLiteral, CommandParameterLiteral, ExecutorParameterLiteral, JobParameterLiteral } from '../../Components/Parameters/types/CustomParameterLiterals.types';
export declare type OrbDisplayMeta = {
    home_url: string;
    source_url: string;
};
export declare type OrbImportShape = {
    [importName: string]: string;
};
export declare type OrbImportsShape = Record<string, OrbImportShape>;
export declare type OrbComponent = Parameterized<AnyParameterLiteral>;
export declare type OrbImportManifest = {
    jobs: Record<string, CustomParametersList<JobParameterLiteral>>;
    executors: Record<string, CustomParametersList<ExecutorParameterLiteral>>;
    commands: Record<string, CustomParametersList<CommandParameterLiteral>>;
};
//# sourceMappingURL=Orb.types.d.ts.map