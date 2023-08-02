export declare type VCSLiteral = 'bitbucket' | 'github' | 'local';
/**
 * Not fully implemented yet. Fetch project pipeline parameters from inside a CircleCI job.
 * @alpha
 */
export declare class Project {
    private _isLocal;
    constructor(isLocal: boolean);
    /**
     * The URL where the current project is hosted. E.g. https://github.com/circleci/circleci-docs
     */
    get git_url(): string;
    /**
     * The lower-case name of the VCS provider, E.g. “github”, “bitbucket”
     */
    get vcs(): VCSLiteral;
}
//# sourceMappingURL=Project.d.ts.map