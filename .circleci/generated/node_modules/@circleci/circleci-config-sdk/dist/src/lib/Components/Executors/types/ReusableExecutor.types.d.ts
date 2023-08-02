import { Executor } from '..';
import { CustomParametersList } from '../../Parameters';
import { StringParameter, AnyParameterType, CustomParametersListShape } from '../../Parameters/types';
import { ExecutorParameterLiteral } from '../../Parameters/types/CustomParameterLiterals.types';
import { ExecutorShape, UnknownExecutableShape, UnknownParameterized } from './Executor.types';
/**
 * The shape output when a reusable executor is generated for a job
 */
export declare type ReusableExecutorJobRefShape = {
    executor: {
        name: StringParameter;
        [key: string]: AnyParameterType;
    };
};
export declare type ReusableExecutorsShape = {
    [key: string]: ExecutorShape & {
        parameters?: CustomParametersListShape;
    };
};
/**
 * The shape output when a reusable executor is generated for a job
 */
export declare type ReusedExecutorShapeContents = {
    name: StringParameter;
    [key: string]: AnyParameterType;
} | StringParameter;
/**
 * The shape output when a reusable executor is generated for a job
 */
export declare type ReusedExecutorShape = {
    executor: ReusedExecutorShapeContents;
};
export declare type UnknownReusableExecutor = {
    [key: string]: UnknownExecutableShape & UnknownParameterized;
};
export declare type ReusableExecutorDependencies = {
    parametersList?: CustomParametersList<ExecutorParameterLiteral>;
    executor: Executor;
};
//# sourceMappingURL=ReusableExecutor.types.d.ts.map