import { OrbRef } from '../../../Orb/exports/OrbRef';
import { Job } from '../../Job';
import { StepsParameter } from '../../Parameters/types';
import { JobParameterLiteral } from '../../Parameters/types/CustomParameterLiterals.types';
import { WorkflowJobContentsShape, WorkflowJobParameters, WorkflowJobShape } from '../types/WorkflowJob.types';
import { WorkflowJobAbstract } from './WorkflowJobAbstract';
/**
 * Assign Parameters and Filters to a Job within a Workflow.
 * Utility class for assigning parameters to a job.
 * Should only be instantiated for specific use cases.
 * @see {@link Workflow.addJob} for general use.
 */
export declare class WorkflowJob extends WorkflowJobAbstract {
    job: Job | OrbRef<JobParameterLiteral>;
    pre_steps?: StepsParameter;
    post_steps?: StepsParameter;
    constructor(job: Job | OrbRef<JobParameterLiteral>, parameters?: Exclude<WorkflowJobParameters, 'type'>, pre_steps?: StepsParameter, post_steps?: StepsParameter);
    generateContents(flatten?: boolean): WorkflowJobContentsShape;
    generate(flatten?: boolean): WorkflowJobShape;
    get name(): string;
    private generateSteps;
}
//# sourceMappingURL=WorkflowJob.d.ts.map