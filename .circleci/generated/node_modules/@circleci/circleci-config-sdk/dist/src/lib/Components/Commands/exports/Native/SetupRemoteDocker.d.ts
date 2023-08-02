import { GenerableType } from '../../../../Config/exports/Mapping';
import { StringParameter } from '../../../Parameters/types';
import { CommandParameters, CommandShape } from '../../types/Command.types';
import { Command } from '../Command';
/**
 * Creates a remote Docker environment configured to execute Docker commands.
 * @see {@link https://circleci.com/docs/2.0/configuration-reference/#setupremotedocker}
 */
export declare class SetupRemoteDocker implements Command {
    parameters: SetupRemoteDockerParameters;
    constructor(parameters?: SetupRemoteDockerParameters);
    /**
     * Generate SetupRemoteDocker Command shape.
     * @returns The generated JSON for the SetupRemoteDocker Commands.
     */
    generate(): SetupRemoteDockerCommandShape;
    get name(): StringParameter;
    get generableType(): GenerableType;
    /**
     * Enable docker image layer caching
     * @param enabled - If true, docker layer caching is enabled for the job.
     * @returns SetupRemoteDocker - The current instance of the SetupRemoteDocker Command.
     * @see {@link https://circleci.com/docs/2.0/docker-layer-caching/}
     */
    setDockerLayerCaching(enabled: boolean): SetupRemoteDocker;
}
/**
 * Command parameters for the SetupRemoteDocker command
 */
export interface SetupRemoteDockerParameters extends CommandParameters {
    /**
     * SetupRemoteDocker directory.
     * Will be interpreted relative to the working_directory of the job.
     */
    version: StringParameter;
    docker_layer_caching?: boolean;
}
/**
 * Generated Shape of the SetupRemoteDocker command.
 */
interface SetupRemoteDockerCommandShape extends CommandShape {
    setup_remote_docker: SetupRemoteDockerParameters;
}
export {};
//# sourceMappingURL=SetupRemoteDocker.d.ts.map