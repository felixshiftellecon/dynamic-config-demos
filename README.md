# A Repo of Demos for CircleCI's Dynamic Configuration Feature

CircleCI's dynamic configuration is a powerful tool that can be used in various ways to dynamically generate configuration when a pipeline is triggered.

For more information on this feature please refer to [CircleCI's documentation](https://circleci.com/docs/dynamic-config/).

## Repo Architecture

Each use case of dynamic config is separated by branch. Each use cases structure may be different but the basic concept is there is a `config.yaml` file that contains the setup workflow. A `continued.yaml` which contain the continued workflow(s) may exist in the repo or it may be generated in some fashion.

