import { GenerableType } from '../../../Config/exports/Mapping';
import { DockerExecutorContentsShape, DockerResourceClass } from '../types/DockerExecutor.types';
import { ExecutorLiteral } from '../types/Executor.types';
import { DockerImage, DockerImageShape } from './DockerImage';
import { Executor } from './Executor';
/**
 * A Docker based CircleCI executor.
 * @see {@link https://circleci.com/docs/2.0/configuration-reference/?section=configuration#docker}
 */
export declare class DockerExecutor extends Executor {
    /**
     * The name of a custom Docker image to use.
     * @example "cimg/base:stable"
     */
    image: DockerImage;
    /**
     * Add additional Docker images which will be accessible from the primary container.
     * This is typically used for adding a database as a service container.
     */
    serviceImages: DockerImage[];
    constructor(image: string, resource_class?: DockerResourceClass, properties?: Omit<DockerImageShape, 'image'>, serviceImages?: DockerImage[]);
    /**
     * Generate Docker Executor schema.
     * @returns The generated JSON for the Docker Executor.
     */
    generateContents(): DockerExecutorContentsShape;
    get generableType(): GenerableType;
    get executorLiteral(): ExecutorLiteral;
    /**
     * Add an environment variable to the Executor.
     * This will be set in plain-text via the exported config file.
     * Consider using project-level environment variables or a context for sensitive information.
     * @see {@link https://circleci.com/docs/env-vars}
     * @example
     * ```
     * myExecutor.addEnvVar('MY_VAR', 'my value');
     * ```
     */
    addEnvVar(name: string, value: string): this;
    /**
     * Add additional images to run along side the primary docker image.
     */
    addServiceImage(image: DockerImage): this;
}
//# sourceMappingURL=DockerExecutor.d.ts.map