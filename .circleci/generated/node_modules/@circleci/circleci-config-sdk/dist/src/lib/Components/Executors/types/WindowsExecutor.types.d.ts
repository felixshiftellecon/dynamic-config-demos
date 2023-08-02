import { StringParameter } from '../../Parameters/types';
import { AnyResourceClass } from './Executor.types';
/**
 * A JSON representation of the Windows Executor Schema
 * To be converted to YAML
 */
export declare type WindowsExecutorShape = {
    image: StringParameter;
};
/**
 * The available Windows Resource Classes.
 * @see {@link https://circleci.com/docs/2.0/configuration-reference/#windows-executor} for specifications of each class.
 */
export declare type WindowsResourceClass = Extract<AnyResourceClass, 'medium' | 'large' | 'xlarge' | '2xlarge'>;
/**
 * Completed resource class after generation, including the windows prefix.
 */
export declare type WindowsResourceClassGenerated = 'windows.medium' | 'windows.large' | 'windows.xlarge' | 'windows.2xlarge';
//# sourceMappingURL=WindowsExecutor.types.d.ts.map