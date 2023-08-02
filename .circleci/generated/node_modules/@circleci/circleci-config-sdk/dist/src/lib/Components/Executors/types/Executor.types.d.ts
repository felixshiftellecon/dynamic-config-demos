import { Executor } from '..';
import { GenerableType } from '../../../Config/exports/Mapping';
import { AnyExecutor } from '../../Job/types/Job.types';
import { CustomParametersList } from '../../Parameters';
import { ExecutorParameterLiteral } from '../../Parameters/types/CustomParameterLiterals.types';
import { ReusableExecutor } from '../exports/ReusableExecutor';
import { ExecutableProperties } from './ExecutorParameters.types';
import { MachineResourceClassArm, MachineResourceClassGPU } from './MachineExecutor.types';
import { MacOSResourceClassAdvanced } from './MacOSExecutor.types';
import { ReusedExecutorShape } from './ReusableExecutor.types';
export declare type UnknownExecutableShape = {
    resource_class: AnyResourceClass;
    [key: string]: unknown;
};
/**
 * The executor output shapes for YAML string
 */
export declare type ExecutorShape = {
    resource_class: string;
} & Partial<Record<ExecutorLiteral, unknown>> & ExecutableProperties;
export declare type AnyExecutorShape = ExecutorShape | ReusedExecutorShape;
/**
 * All valid resource classes found for an executor object for standard use cases
 */
export declare type AnyResourceClassBase = 'small' | 'medium' | 'medium+' | 'large' | 'xlarge' | '2xlarge' | '2xlarge+';
/**
 * The valid resource classes for advanced use cases
 */
export declare type AnyResourceClassExtended = MachineResourceClassArm | MachineResourceClassGPU | MacOSResourceClassAdvanced;
/**
 * All valid resource classes found for an executor object
 */
export declare type AnyResourceClass = AnyResourceClassBase | AnyResourceClassExtended;
/**
 * The valid executors found on an executor object
 * Windows is covered by the machine literal
 */
export declare type ExecutorLiteral = 'docker' | 'machine' | 'macos';
/**
 * The valid executors found on an object referencing an executor
 */
export declare type ExecutorUsageLiteral = ExecutorLiteral | 'executor';
export declare type UnknownParameterized = {
    parameters?: {
        [key: string]: unknown;
    };
};
export declare type ReusableExecutorDefinition = {
    [key: string]: UnknownExecutableShape & UnknownParameterized;
};
export declare type ReusableExecutorDependencies = {
    parametersList?: CustomParametersList<ExecutorParameterLiteral>;
    executor: Executor;
};
export declare type ExecutorSubtypeMap = {
    [key in ExecutorUsageLiteral | 'windows']: {
        generableType: GenerableType;
        parse: ExecutorSubtypeParser;
    };
};
export declare type ExecutorSubtypeParser = (args: unknown, resourceClass: AnyResourceClass, properties?: ExecutableProperties, reusableExecutors?: ReusableExecutor[]) => AnyExecutor;
export { ExecutableParameters, ExecutableProperties, } from './ExecutorParameters.types';
//# sourceMappingURL=Executor.types.d.ts.map