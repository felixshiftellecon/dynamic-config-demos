import { AnyConditionShape } from '../../Logic/types';
import { WorkflowJobAbstract } from '../exports/WorkflowJobAbstract';
import { WorkflowJobShape } from './WorkflowJob.types';
export declare type WorkflowsShape = {
    [workflowName: string]: {
        when: AnyConditionShape;
        jobs: WorkflowJobShape[];
    };
};
export declare type WorkflowContentsShape = {
    when: AnyConditionShape;
    jobs: WorkflowJobShape[];
};
export declare type UnknownWorkflowShape = {
    jobs: {
        [key: string]: unknown;
    }[];
};
export declare type UnknownWorkflowJobShape = {
    requires?: string[];
    parameters?: {
        [key: string]: unknown;
    };
    name?: string;
    type?: 'approval';
};
export declare type WorkflowDependencies = {
    jobList: WorkflowJobAbstract[];
};
//# sourceMappingURL=Workflow.types.d.ts.map