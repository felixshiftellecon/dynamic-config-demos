import { GenerableType } from '../../../../Config/exports/Mapping';
import { StringParameter } from '../../../Parameters/types';
import { BodylessCommand, CommandParameters, CommandShape } from '../../types/Command.types';
import { Command } from '../Command';
/**
 * A special step used to check out source code to the configured path.
 * (defaults to the working_directory).
 * @see {@link https://circleci.com/docs/configuration-reference#checkout}
 */
export declare class Checkout implements Command {
    parameters?: CheckoutParameters;
    constructor(parameters?: CheckoutParameters);
    /**
     * Generate Checkout Command shape.
     * @returns The generated JSON for the Checkout Command.
     */
    generate(): CheckoutCommandShape | BodylessCommand;
    get name(): StringParameter;
    get generableType(): GenerableType;
}
/**
 * Command parameters for the Checkout command
 */
export interface CheckoutParameters extends CommandParameters {
    /**
     * Checkout directory.
     * Will be interpreted relative to the working_directory of the job.
     */
    path?: StringParameter;
}
interface CheckoutCommandShape extends CommandShape {
    checkout: CheckoutParameters;
}
export {};
//# sourceMappingURL=Checkout.d.ts.map