import { Generable } from '../..';
import { GenerableType } from '../../../Config/exports/Mapping';
import { Command } from '../../Commands/types/Command.types';
import { Job } from '../../Job';
import { When } from '../../Logic';
import { Conditional } from '../../Logic/exports/Conditional';
import { WorkflowContentsShape, WorkflowJobParameters, WorkflowsShape } from '../types';
import { WorkflowJobAbstract } from './WorkflowJobAbstract';
/**
 * A workflow is a set of rules for defining a collection of jobs and their run order.
 */
export declare class Workflow implements Generable, Conditional {
    /**
     * The name of the Workflow.
     */
    name: string;
    /**
     * The jobs to execute when this Workflow is triggered.
     */
    jobs: WorkflowJobAbstract[];
    /**
     * The conditional statement that will be evaluated to determine whether to trigger this workflow.
     */
    when?: When;
    /**
     * Instantiate a Workflow
     * @param name - Name your workflow. Must be unique.
     * @param jobs - A list of jobs to be executed as part of your Workflow.
     */
    constructor(name: string, jobs?: Array<Job | WorkflowJobAbstract>, when?: When);
    /**
     * Generate Workflow Shape.
     * @returns The generated JSON for the Workflow.
     */
    generate(flatten?: boolean): WorkflowsShape;
    /**
     * Generate contents of the Workflow.
     */
    generateContents(flatten?: boolean): WorkflowContentsShape;
    /**
     * Add a Job to the current Workflow. Chainable
     */
    addJob(job: Job, parameters?: WorkflowJobParameters, pre_steps?: Command[], post_steps?: Command[]): this;
    /**
     * Add a Approval to the current Workflow. Chainable
     */
    addJobApproval(name: string, parameters?: WorkflowJobParameters): this;
    get generableType(): GenerableType;
}
//# sourceMappingURL=Workflow.d.ts.map