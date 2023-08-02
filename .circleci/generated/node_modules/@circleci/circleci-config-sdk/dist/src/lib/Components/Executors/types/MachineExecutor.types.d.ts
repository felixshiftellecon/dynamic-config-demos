import { BooleanParameter, StringParameter } from '../../Parameters/types';
import { AnyResourceClass } from './Executor.types';
export declare type MachineExecutorShape = {
    image: StringParameter;
    docker_layer_caching?: BooleanParameter;
};
/**
 * The available GPU Machine (Linux) Resource Classes.
 * @see {@link https://circleci.com/docs/configuration-reference#arm-execution-environment-linux} for specifications of each class.
 */
export declare type MachineResourceClassArm = 'arm.medium' | 'arm.large' | 'arm.xlarge' | 'arm.2xlarge';
/**
 * The available Machine (Linux) Resource Classes.
 * @see {@link https://circleci.com/docs/configuration-reference#gpu-execution-environment-linux} for specifications of each class.
 */
export declare type MachineResourceClassGPU = 'gpu.nvidia.small' | 'gpu.nvidia.medium' | 'gpu.nvidia.large';
/**
 * The available Arm Machine (Linux) Resource Classes.
 * @see {@link https://circleci.com/docs/configuration-reference#linuxvm-execution-environment} for specifications of each class.
 */
export declare type MachineResourceClass = Extract<AnyResourceClass, 'medium' | 'large' | 'xlarge' | '2xlarge' | MachineResourceClassArm | MachineResourceClassGPU>;
//# sourceMappingURL=MachineExecutor.types.d.ts.map