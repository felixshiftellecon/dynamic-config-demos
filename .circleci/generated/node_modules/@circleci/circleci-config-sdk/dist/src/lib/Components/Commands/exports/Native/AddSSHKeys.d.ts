import { GenerableType } from '../../../../Config/exports/Mapping';
import { ListParameter, StringParameter } from '../../../Parameters/types';
import { CommandParameters, CommandShape } from '../../types/Command.types';
import { Command } from '../Command';
/**
 * The AddSSHKeys command is a special step that adds SSH keys from a project’s settings to a container. Also configures SSH to use these keys.
 * @see {@link https://circleci.com/docs/configuration-reference#add-ssh-keys}
 */
export declare class AddSSHKeys implements Command {
    parameters: AddSSHKeysParameters;
    constructor(parameters: AddSSHKeysParameters);
    /**
     * Generate AddSSHKeys Command shape.
     * @returns The generated JSON for the AddSSHKeys Command.
     */
    generate(): AddSSHKeysCommandShape;
    get name(): StringParameter;
    get generableType(): GenerableType;
}
/**
 * Command parameters for the AddSSHKeys command
 */
export interface AddSSHKeysParameters extends CommandParameters {
    /**
     * List of fingerprints corresponding to the keys to be added.
     */
    fingerprints: ListParameter;
}
/**
 * JSON shape for the AddSSHKeys command.
 */
interface AddSSHKeysCommandShape extends CommandShape {
    add_ssh_keys: AddSSHKeysParameters;
}
export {};
//# sourceMappingURL=AddSSHKeys.d.ts.map