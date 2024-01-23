const CircleCI = require("@circleci/circleci-config-sdk");

var config = new CircleCI.Config() 

// Define base executor
var dockerBase = new CircleCI.executors.DockerExecutor(
  "cimg/base:stable",
  "small"
);

// Define hello job
var helloJob = new CircleCI.Job("hello", dockerBase);
helloJob.addStep(new CircleCI.commands.Run({command: "echo hello john"}));
config.addJob(helloJob);

// Define workflow
var helloWorkflow = new CircleCI.Workflow("hello-workflow");
helloWorkflow.addJob(helloJob);

// Add workflow to config
config.addWorkflow(helloWorkflow);

// Generate YAML config
config.writeFile('generated_config.yml');

return config;