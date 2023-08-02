import { EnvironmentParameter } from '../../Parameters/types';
export declare class DockerImage implements DockerImageShape {
    image: string;
    name?: string;
    entrypoint?: string[];
    command?: string[];
    user?: string;
    auth?: DockerAuth;
    environment?: EnvironmentParameter;
    aws_auth?: DockerAuthAWS;
    constructor(image: string, name?: string, entrypoint?: string[], command?: string[], user?: string, environment?: EnvironmentParameter, auth?: DockerAuth, aws_auth?: DockerAuthAWS);
}
/**
 * Type interface for a single Docker image.
 */
export declare type DockerImageShape = {
    name?: string;
    image: string;
    entrypoint?: string[];
    command?: string[];
    user?: string;
    auth?: DockerAuth;
    environment?: EnvironmentParameter;
    aws_auth?: DockerAuthAWS;
};
/**
 * Authentication for registries using standard `docker login` credentials
 */
export declare type DockerAuth = {
    username: string;
    /**
     * Specify an environment variable (e.g. $DOCKER_PASSWORD)
     */
    password: string;
};
/**
 * Authentication for AWS Elastic Container Registry (ECR)
 */
export declare type DockerAuthAWS = {
    aws_access_key_id: string;
    /**
     * Specify an environment variable (e.g. $ECR_AWS_SECRET_ACCESS_KEY)
     */
    aws_secret_access_key: string;
};
//# sourceMappingURL=DockerImage.d.ts.map