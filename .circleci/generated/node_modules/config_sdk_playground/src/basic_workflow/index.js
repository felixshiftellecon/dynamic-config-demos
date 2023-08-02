const CircleCI = require("@circleci/circleci-config-sdk");

module.exports.basicConfig = function () {

  var config = new CircleCI.Config() 

  // Define base executor
  var dockerBase = new CircleCI.executors.DockerExecutor(
    "cimg/base:2023.02",
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

  //config.writeFile('basic_workflow.yml')
  
  // Generate JSON config
  config.writeFile('basic_workflow.yml');

  return config;

};