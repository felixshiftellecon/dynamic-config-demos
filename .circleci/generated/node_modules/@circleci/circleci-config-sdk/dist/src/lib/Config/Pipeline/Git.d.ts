/**
 * Not fully implemented yet. Fetch git pipeline parameters from inside a CircleCI job.
 * @alpha
 */
export declare class Git {
    _isLocal: boolean;
    constructor(isLocal: boolean);
    /**
     * The name of the git tag that was pushed to trigger the pipeline. If the pipeline was not triggered by a tag, then this is the empty string.
     */
    get tag(): string;
    /**
     * The name of the git branch that was pushed to trigger the pipeline.
     */
    get branch(): string;
    /**
     * The long (40-character) git SHA that is being built.
     */
    get revision(): string;
    /**
     * The long (40-character) git SHA of the build prior to the one being built.
     */
    get base_revision(): string;
}
//# sourceMappingURL=Git.d.ts.map