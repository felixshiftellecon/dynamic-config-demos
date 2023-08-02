import { Generable } from '../../..';
import { GenerableType } from '../../../../Config/exports/Mapping';
import { CustomParametersList } from '../../../Parameters';
import { Parameterized } from '../../../Parameters/exports/Parameterized';
import { CommandParameterLiteral } from '../../../Parameters/types/CustomParameterLiterals.types';
import { CommandParameters, ReusableCommandBodyShape, ReusableCommandShape } from '../../types/Command.types';
import { Command } from '../Command';
import { ReusedCommand } from './ReusedCommand';
/**
 * Define a custom Command with custom parameters
 * {@label STATIC_2.1}
 */
export declare class ReusableCommand implements Generable, Parameterized<CommandParameterLiteral> {
    /**
     * Name used to reference this command definition from command steps.
     */
    name: string;
    /**
     * Steps this command will execute when called.
     */
    steps: Command[];
    /**
     * Custom list of parameters that can be used when calling this command.
     */
    parameters?: CustomParametersList<CommandParameterLiteral>;
    /**
     * A string that describes the purpose of the command
     */
    description?: string;
    constructor(name: string, steps?: Command[], parameters?: CustomParametersList<CommandParameterLiteral>, description?: string);
    generate(flatten?: boolean): ReusableCommandShape;
    generateContents(flatten?: boolean): ReusableCommandBodyShape;
    /**
     * @param parameters - The parameters to be passed to the command.
     * @returns A parameterized implementation of this command.
     */
    toReused(parameters?: CommandParameters): ReusedCommand;
    addStep(step: Command): ReusableCommand;
    defineParameter(name: string, type: CommandParameterLiteral, defaultValue?: unknown, description?: string, enumValues?: string[]): ReusableCommand;
    get generableType(): GenerableType;
}
//# sourceMappingURL=ReusableCommand.d.ts.map