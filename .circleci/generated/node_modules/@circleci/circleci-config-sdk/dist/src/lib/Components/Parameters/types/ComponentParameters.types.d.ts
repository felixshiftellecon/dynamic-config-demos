import { AnyParameterType, EnumParameter, StringParameter, BooleanParameter, IntegerParameter, EnvironmentParameter, EnvironmentVariableNameParameter, StepsParameter, ExecutorParameter, ListParameter, FilterParameter, MatrixParameter } from '.';
/**
 * Available parameter types for Jobs
 */
export declare type JobParameterTypes = Extract<AnyParameterType, EnumParameter | StringParameter | BooleanParameter | IntegerParameter | EnvironmentVariableNameParameter | StepsParameter | ExecutorParameter | MatrixParameter | FilterParameter>;
/**
 * Available parameter types for Commands
 */
export declare type CommandParameterTypes = Extract<AnyParameterType, EnumParameter | StringParameter | IntegerParameter | BooleanParameter | StepsParameter | EnvironmentVariableNameParameter | EnvironmentParameter | ListParameter>;
/**
 * Available parameter types for Executors
 */
export declare type ExecutorParameterTypes = Extract<AnyParameterType, EnumParameter | StringParameter | IntegerParameter | EnvironmentParameter>;
/**
 * Available parameter types for Pipelines
 */
export declare type PipelineParametersType = Extract<AnyParameterType, StringParameter | IntegerParameter | BooleanParameter | EnumParameter>;
/**
 * Interface for components parameters
 */
export declare type ComponentParameter<ParameterType extends AnyParameterType> = {
    [key: string]: ParameterType | undefined;
};
//# sourceMappingURL=ComponentParameters.types.d.ts.map