import { WorkflowJobParameters, WorkflowJobShape } from '../types/WorkflowJob.types';
import { WorkflowJobAbstract } from './WorkflowJobAbstract';
export declare class WorkflowJobApproval extends WorkflowJobAbstract {
    private _name;
    constructor(name: string, parameters?: WorkflowJobParameters);
    generate(flatten?: boolean): WorkflowJobShape;
    get name(): string;
}
//# sourceMappingURL=WorkflowJobApproval.d.ts.map