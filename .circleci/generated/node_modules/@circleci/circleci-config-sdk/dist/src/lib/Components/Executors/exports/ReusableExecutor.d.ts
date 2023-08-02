import { Generable } from '../..';
import { GenerableType } from '../../../Config/exports/Mapping';
import { CustomParametersList } from '../../Parameters';
import { Parameterized } from '../../Parameters/exports/Parameterized';
import { ExecutorParameterTypes } from '../../Parameters/types/ComponentParameters.types';
import { ExecutorParameterLiteral } from '../../Parameters/types/CustomParameterLiterals.types';
import { ReusableExecutorJobRefShape, ReusableExecutorsShape } from '../types/ReusableExecutor.types';
import { Executor } from './Executor';
import { ReusedExecutor } from './ReusedExecutor';
/**
 * A 2.1 wrapper for reusing CircleCI executor.
 * @see {@link https://circleci.com/docs/2.0/reusing-config/#the-executors-key}
 * {@label STATIC_2.1}
 */
export declare class ReusableExecutor implements Generable, Parameterized<ExecutorParameterLiteral> {
    /**
     * The name of a defined executor to use.
     */
    name: string;
    /**
     * The referenced executor to use.
     */
    executor: Executor;
    /**
     * Parameters to assign to the executor
     */
    parameters?: CustomParametersList<ExecutorParameterLiteral>;
    constructor(name: string, executor: Executor, parameters?: CustomParametersList<ExecutorParameterLiteral>);
    /**
     * Generate Reusable Executor schema.
     * @returns The generated JSON for the Reusable Executor.
     */
    generate(): ReusableExecutorsShape | ReusableExecutorJobRefShape;
    defineParameter(name: string, type: ExecutorParameterLiteral, defaultValue?: unknown, description?: string, enumValues?: string[]): ReusableExecutor;
    get generableType(): GenerableType;
    reuse(parameters?: Record<string, ExecutorParameterTypes>): ReusedExecutor;
}
//# sourceMappingURL=ReusableExecutor.d.ts.map