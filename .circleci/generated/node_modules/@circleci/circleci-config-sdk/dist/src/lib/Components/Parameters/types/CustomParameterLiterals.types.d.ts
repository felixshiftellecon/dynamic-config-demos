/**
 * All potential parameter type literals that can be supplied to custom reusable components.
 * @see {@link  https://circleci.com/docs/2.0/reusing-config/#parameter-syntax}
 */
export declare type AnyParameterLiteral = 'string' | 'boolean' | 'integer' | EnumParameterLiteral | 'executor' | 'steps' | 'env_var_name';
export declare type EnumParameterLiteral = 'enum';
/**
 * Custom Parameter types available to Jobs
 * @see {@link CustomParametersList}
 * @see {@link ParameterizedJob}
 */
export declare type JobParameterLiteral = AnyParameterLiteral;
/**
 * Custom Parameter types available to Commands
 */
export declare type CommandParameterLiteral = Extract<AnyParameterLiteral, 'string' | 'boolean' | 'integer' | EnumParameterLiteral | 'steps' | 'env_var_name'>;
/**
 * Custom Parameter types available to Executors
 */
export declare type ExecutorParameterLiteral = Extract<AnyParameterLiteral, 'string' | 'boolean' | 'integer' | EnumParameterLiteral>;
/**
 * Custom Parameter types available to the Pipeline at the Config level.
 */
export declare type PipelineParameterLiteral = Extract<AnyParameterLiteral, 'string' | 'boolean' | 'integer' | EnumParameterLiteral>;
export declare type ParameterizedComponentLiteral = 'job' | 'command' | 'executor' | 'pipeline';
//# sourceMappingURL=CustomParameterLiterals.types.d.ts.map