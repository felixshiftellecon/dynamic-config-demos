import * as YAML from 'yaml';
import { Generable } from '../Components';
import { ReusableExecutor } from '../Components/Executors/exports/ReusableExecutor';
import { Job } from '../Components/Job';
import { CustomParametersList } from '../Components/Parameters';
import { Parameterized } from '../Components/Parameters/exports/Parameterized';
import { PipelineParameterLiteral } from '../Components/Parameters/types/CustomParameterLiterals.types';
import { ReusableCommand } from '../Components/Reusable';
import { Workflow } from '../Components/Workflow/exports/Workflow';
import { OrbImport } from '../Orb/exports/OrbImport';
import { GenerableType } from './exports/Mapping';
import { Pipeline } from './Pipeline';
import { CircleCIConfigObject, CircleCIConfigShape, ConfigVersion } from './types';
/**
 * A CircleCI configuration. Instantiate a new config and add CircleCI config elements.
 */
export declare class Config implements CircleCIConfigObject, Parameterized<PipelineParameterLiteral>, Generable {
    /**
     * The version field is intended to be used in order to issue warnings for deprecation or breaking changes.
     */
    version: ConfigVersion;
    /**
     * Reusable executors to be referenced from jobs.
     */
    executors?: ReusableExecutor[];
    /**
     * Jobs are collections of steps. All of the steps in the job are executed in a single unit, either within a fresh container or VM.
     */
    jobs: Job[];
    /**
     * A command definition defines a sequence of steps as a map to be executed in a job, enabling you to reuse a single command definition across multiple jobs.
     */
    commands?: ReusableCommand[];
    /**
     * A Workflow is comprised of one or more uniquely named jobs.
     */
    workflows: Workflow[];
    /**
     * A parameter allows custom data to be passed to a pipeline.
     */
    parameters?: CustomParametersList<PipelineParameterLiteral>;
    /**
     * Access information about the current pipeline.
     */
    pipeline: Pipeline;
    /**
     * Designates the config.yaml for use of CircleCI’s dynamic configuration feature.
     */
    setup: boolean;
    orbs?: OrbImport[];
    /**
     * Instantiate a new CircleCI config. Build up your config by adding components.
     * @param jobs - Instantiate with pre-defined Jobs.
     * @param workflows - Instantiate with pre-defined Workflows.
     * @param commands - Instantiate with pre-defined reusable Commands.
     */
    constructor(setup?: boolean, jobs?: Job[], workflows?: Workflow[], executors?: ReusableExecutor[], commands?: ReusableCommand[], parameters?: CustomParametersList<PipelineParameterLiteral>, orbs?: OrbImport[]);
    /**
     * Add a Workflow to the current Config. Chainable
     * @param workflow - Injectable Workflow
     */
    addWorkflow(workflow: Workflow): this;
    /**
     * Add a Custom Command to the current Config. Chainable
     * @param command - Injectable command
     */
    addReusableCommand(command: ReusableCommand): this;
    /**
     * Add a Workflow to the current Config. Chainable
     * @param workflow - Injectable Workflow
     */
    addReusableExecutor(executor: ReusableExecutor): this;
    /**
     * Add a Job to the current Config. Chainable
     * @param job - Injectable Job
     */
    addJob(job: Job): this;
    importOrb(orb: OrbImport): this;
    /**
     * Define a pipeline parameter for the current Config. Chainable
     *
     * @param name - The name of the parameter
     * @param type - The type of parameter
     * @param defaultValue - The default value of the parameter
     * @param description - A description of the parameter
     * @param enumValues - An array of possible values for parameters of enum type
     */
    defineParameter(name: string, type: PipelineParameterLiteral, defaultValue?: unknown, description?: string, enumValues?: string[]): Config;
    private _prependVersionComment;
    /**
     * @param flatten - Attempt to remove unnecessary parameters when possible.
     * @returns the CircleCI config as a JSON string
     */
    generate(flatten?: boolean): CircleCIConfigShape;
    /**
     *
     * @param flatten - Attempt to remove unnecessary parameters when possible.
     * @param options - Modify the YAML output options.
     * @returns the CircleCI config as a YAML string
     */
    stringify(flatten?: boolean, options?: YAML.ToStringOptions): string;
    get generableType(): GenerableType;
    /**
     * Agnostic method to save a config file to disk via Node or the Browser.
     * Note: If you are accessing this method from the browser, it must be triggered by a user action.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/showSaveFilePicker#security}
     * @param path - The path to write the config to. ONLY USED IN NODE.JS
     */
    writeFile(path?: string): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map