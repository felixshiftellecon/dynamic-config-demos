import { GenerableType } from '../../../Config/exports/Mapping';
import { ExecutorLiteral } from '../types/Executor.types';
import { MacOSExecutorShape, MacOSResourceClass } from '../types/MacOSExecutor.types';
import { Executor } from './Executor';
/**
 * A MacOS Virtual Machine with configurable Xcode version.
 * @see {@link https://circleci.com/docs/2.0/executor-types/#using-macos}
 */
export declare class MacOSExecutor extends Executor<MacOSResourceClass> {
    /**
     * Select an xcode version.
     * @see {@link https://circleci.com/developer/machine/image/macos}
     */
    xcode: string;
    constructor(xcode: string, resource_class?: MacOSResourceClass);
    generateContents(): MacOSExecutorShape;
    get generableType(): GenerableType;
    get executorLiteral(): ExecutorLiteral;
}
//# sourceMappingURL=MacOSExecutor.d.ts.map