import { GenerableType } from '../../../Config/exports/Mapping';
import { Generable } from '../../index';
import { CustomParametersList } from '../../Parameters';
import { ExecutorParameterLiteral } from '../../Parameters/types/CustomParameterLiterals.types';
import { AnyResourceClass, ExecutorLiteral, ExecutorShape } from '../types/Executor.types';
import { ReusableExecutor } from './ReusableExecutor';
/**
 * A generic reusable Executor.
 */
export declare abstract class Executor<ResourceClass extends AnyResourceClass = AnyResourceClass> implements Generable {
    resource_class: ResourceClass;
    /**
     * @param resource_class - The resource class of the environment
     * @param parameters - Optional parameters to describe the executable environment
     */
    constructor(resource_class: ResourceClass);
    abstract get generableType(): GenerableType;
    abstract get executorLiteral(): ExecutorLiteral;
    abstract generateContents(): unknown;
    get generateResourceClass(): ResourceClass | string;
    generate(): ExecutorShape;
    toReusable(name: string, parameters?: CustomParametersList<ExecutorParameterLiteral>): ReusableExecutor;
}
//# sourceMappingURL=Executor.d.ts.map