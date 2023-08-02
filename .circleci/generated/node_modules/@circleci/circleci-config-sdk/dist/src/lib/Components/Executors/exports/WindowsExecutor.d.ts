import { GenerableType } from '../../../Config/exports/Mapping';
import { ExecutorLiteral, ExecutorShape } from '../types/Executor.types';
import { WindowsExecutorShape, WindowsResourceClass, WindowsResourceClassGenerated } from '../types/WindowsExecutor.types';
import { Executor } from './Executor';
/**
 * A Windows Virtual Machine (CircleCI Cloud)
 * @see {@link https://circleci.com/docs/2.0/executor-types/#using-the-windows-executor}
 */
export declare class WindowsExecutor extends Executor<WindowsResourceClass> {
    /**
     * Select one of the available Windows VM Images provided by CircleCI
     * @see - https://circleci.com/developer/machine
     */
    image: string;
    static defaultShell: string;
    constructor(resource_class?: WindowsResourceClass, image?: string);
    generate(): ExecutorShape;
    generateContents(): WindowsExecutorShape;
    get generableType(): GenerableType;
    get executorLiteral(): ExecutorLiteral;
    get generateResourceClass(): WindowsResourceClassGenerated;
}
//# sourceMappingURL=WindowsExecutor.d.ts.map