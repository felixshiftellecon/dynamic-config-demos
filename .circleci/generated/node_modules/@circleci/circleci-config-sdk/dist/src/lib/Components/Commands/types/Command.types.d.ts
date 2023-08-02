import { CommandParameterTypes, ComponentParameter } from '../../Parameters/types/ComponentParameters.types';
import { CustomParametersListShape } from '../../Parameters/types';
import { GenerableType } from '../../../Config/exports/Mapping';
import { Command } from '../exports/Command';
import { CustomParametersList } from '../../Parameters';
import { CommandParameterLiteral } from '../../Parameters/types/CustomParameterLiterals.types';
export declare type CommandType<T> = Extract<string | number, T>;
/**
 * Parameter definitions for the command.
 */
export declare type CommandParameters = ComponentParameter<CommandParameterTypes>;
export declare type CommandShape = Record<string, CommandParameters>;
export declare type BodylessCommand = string;
export declare type CommandShorthandShape = Record<string, string>;
export declare type AnyCommandShape = CommandShape | CommandShorthandShape | BodylessCommand;
export declare type ReusableCommandBodyShape = {
    parameters?: CustomParametersListShape;
    steps: AnyCommandShape[];
    description?: string;
};
export declare type ReusableCommandShape = {
    [name: string]: ReusableCommandBodyShape;
};
/**
 * The valid native commands found on an step object
 */
export declare type NativeCommandLiteral = 'restore_cache' | 'save_cache' | 'attach_workspace' | 'persist_to_workspace' | 'add_ssh_keys' | 'checkout' | 'run' | 'setup_remote_docker' | 'store_artifacts' | 'store_test_results';
export declare type CommandSubtypeMap = {
    [key in NativeCommandLiteral]: {
        generableType: GenerableType;
        parse: (args?: CommandParameters) => Command;
    };
};
export declare type ReusableCommandDependencies = {
    parametersList?: CustomParametersList<CommandParameterLiteral>;
    steps: Command[];
};
export { Command };
//# sourceMappingURL=Command.types.d.ts.map