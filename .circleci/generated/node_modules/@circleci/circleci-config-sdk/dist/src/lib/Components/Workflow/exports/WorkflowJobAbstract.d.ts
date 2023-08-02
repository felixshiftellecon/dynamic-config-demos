import { GenerableType } from '../../../Config/exports/Mapping';
import { Generable } from '../../index';
import { WorkflowJobContentsShape, WorkflowJobParameters, WorkflowJobShape } from '../types/WorkflowJob.types';
/**
 * Assign Parameters and Filters to a Job within a Workflow.
 * Utility class for assigning parameters to a job.
 * Should only be instantiated for specific use cases.
 * @see {@link Workflow.addJob} for general use.
 */
export declare abstract class WorkflowJobAbstract implements Generable {
    parameters?: WorkflowJobParameters;
    constructor(parameters?: WorkflowJobParameters);
    generateContents(flatten?: boolean): WorkflowJobContentsShape;
    get generableType(): GenerableType;
    abstract get name(): string;
    abstract generate(flatten?: boolean): WorkflowJobShape;
}
//# sourceMappingURL=WorkflowJobAbstract.d.ts.map