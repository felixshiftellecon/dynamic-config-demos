import { Command } from '../../Commands/exports/Command';
import { Executor } from '../../Executors';
import { ReusedExecutor } from '../../Executors/exports/ReusedExecutor';
import { AnyExecutorShape, ExecutableProperties } from '../../Executors/types/Executor.types';
import { CustomParametersList } from '../../Parameters';
import { CustomParametersListShape, EnvironmentParameter } from '../../Parameters/types';
import { JobParameterLiteral } from '../../Parameters/types/CustomParameterLiterals.types';
export declare type JobContentsShape = {
    steps: unknown[];
    parallelism?: number;
} & AnyExecutorShape & JobEnvironmentShape;
export declare type JobsShape = {
    [key: string]: JobContentsShape;
};
export declare type JobEnvironmentShape = {
    environment?: EnvironmentParameter;
};
export declare type AnyExecutor = ReusedExecutor | Executor;
export declare type ParameterizedJobContents = JobContentsShape & {
    parameters: CustomParametersListShape;
};
export declare type JobDependencies = {
    executor: AnyExecutor;
    steps: Command[];
    parametersList?: CustomParametersList<JobParameterLiteral>;
};
export declare type JobOptionalProperties = {
    parallelism?: number;
} & ExecutableProperties;
export declare type UnknownJobShape = {
    [key: string]: unknown;
    steps: {
        [key: string]: unknown;
    }[];
    resource_class: string;
    parameters?: {
        [key: string]: unknown;
    };
    environment?: {
        [key: string]: string;
    };
};
//# sourceMappingURL=Job.types.d.ts.map