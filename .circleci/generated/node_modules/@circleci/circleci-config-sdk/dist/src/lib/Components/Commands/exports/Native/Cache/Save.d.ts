import { GenerableType } from '../../../../../Config/exports/Mapping';
import { ListParameter, StringParameter } from '../../../../Parameters/types';
import { CommandParameters, CommandShape } from '../../../types/Command.types';
import { Command } from '../../Command';
/**
 * Generates and stores a cache of a file or directory of files such as dependencies or source code in our object storage. Later jobs can restore this cache.
 * @see {@link https://circleci.com/docs/configuration-reference#savecache}
 */
export declare class Save implements Command {
    parameters: SaveCacheParameters;
    constructor(parameters: SaveCacheParameters);
    /**
     * Generate Save Cache Command shape.
     * @returns The generated JSON for the Save Cache Commands.
     */
    generate(): SaveCacheCommandShape;
    get name(): StringParameter;
    get generableType(): GenerableType;
}
/**
 * Command parameters for the SaveCache command
 */
export interface SaveCacheParameters extends CommandParameters {
    /**
     * List of directories which should be added to the cache
     */
    paths: ListParameter;
    /**
     * Unique identifier for this cache
     */
    key: StringParameter;
    /**
     * Specify when to enable or disable the step.
     */
    when?: 'always' | 'on_success' | 'on_fail';
}
/**
 * Generated Shape of the SaveCache command.
 */
interface SaveCacheCommandShape extends CommandShape {
    save_cache: SaveCacheParameters;
}
export {};
//# sourceMappingURL=Save.d.ts.map