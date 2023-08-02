import { GenerableType } from '../../../Config/exports/Mapping';
import { ExecutorLiteral } from '../types/Executor.types';
import { MachineExecutorShape, MachineResourceClass } from '../types/MachineExecutor.types';
import { Executor } from './Executor';
/**
 * The Linux Virtual Machine Executor.
 * @see {@link https://circleci.com/docs/2.0/executor-types/#using-machine}
 */
export declare class MachineExecutor extends Executor<MachineResourceClass> {
    /**
     * Select one of the Ubuntu Linux VM Images provided by CircleCI.
     * @see - https://circleci.com/developer/machine
     */
    image: string;
    docker_layer_caching?: boolean;
    constructor(resource_class?: MachineResourceClass, image?: string, docker_layer_caching?: boolean);
    generateContents(): MachineExecutorShape;
    get generableType(): GenerableType;
    get executorLiteral(): ExecutorLiteral;
    /**
     * Enable docker image layer caching
     * @param enabled - If true, docker layer caching is enabled for the machine executor.
     * @returns MachineExecutor - The current instance of the MachineExecutor Command.
     * @see {@link https://circleci.com/docs/2.0/docker-layer-caching/}
     */
    setDockerLayerCaching(enabled: boolean): MachineExecutor;
}
//# sourceMappingURL=MachineExecutor.d.ts.map