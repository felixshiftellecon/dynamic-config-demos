import { Project } from './Project';
import { Git } from './Git';
/**
 * Not fully implemented yet. Fetch pipeline parameters from inside a CircleCI job.
 * @alpha
 */
export declare class Pipeline {
    /**
     * Pipeline parameter values are passed at the config level on CircleCI. These values will not be present on a local system.
     */
    private _isLocal;
    /**
     * Array of user defined parameters
     */
    constructor();
    /**
     * A globally unique id representing for the pipeline
     * @beta
     */
    get id(): string;
    /**
     * A project unique integer id for the pipeline
     * @beta
     */
    get number(): number;
    /**
     * Project metadata
     */
    project(): Project;
    /**
     * Git metadata
     */
    git(): Git;
}
//# sourceMappingURL=index.d.ts.map