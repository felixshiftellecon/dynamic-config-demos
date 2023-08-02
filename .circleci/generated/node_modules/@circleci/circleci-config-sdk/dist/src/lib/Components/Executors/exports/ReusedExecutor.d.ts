import { Generable } from '../..';
import { GenerableType } from '../../../Config/exports/Mapping';
import { OrbRef } from '../../../Orb';
import { ExecutorParameterTypes } from '../../Parameters/types/ComponentParameters.types';
import { ExecutorParameterLiteral } from '../../Parameters/types/CustomParameterLiterals.types';
import { ReusedExecutorShape, ReusedExecutorShapeContents } from '../types/ReusableExecutor.types';
import { ReusableExecutor } from './ReusableExecutor';
/**
 * A 2.1 wrapper for reusing CircleCI executor.
 * @see {@link https://circleci.com/docs/2.0/reusing-config/#the-executors-key}
 * {@label STATIC_2.1}
 */
export declare class ReusedExecutor implements Generable {
    /**
     * The referenced executor to use.
     */
    private _executor;
    /**
     * Parameters to assign to the executor
     */
    private _parameters?;
    constructor(executor: ReusableExecutor | OrbRef<ExecutorParameterLiteral>, parameters?: Record<string, ExecutorParameterTypes>);
    /**
     * Generate Reused Executor schema.
     * @returns The generated JSON for the Reused Executor.
     */
    generate(flatten?: boolean): ReusedExecutorShape;
    /**
     * Generate Reused Executor schema.
     * @returns The generated JSON for the Reused Executor.
     */
    generateContents(flatten?: boolean): ReusedExecutorShapeContents;
    get generableType(): GenerableType;
    get executor(): ReusableExecutor | OrbRef<ExecutorParameterLiteral>;
    get parameters(): Record<string, ExecutorParameterTypes> | undefined;
}
//# sourceMappingURL=ReusedExecutor.d.ts.map