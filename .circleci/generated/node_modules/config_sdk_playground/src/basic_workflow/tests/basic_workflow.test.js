const fs = require('fs');
const basicWorkflow = require('../index.js')
const CircleCI = require("@circleci/circleci-config-sdk");

test('Create Basic Config', () => {
  var testConfig= new CircleCI.Config();

  // Define base executor
  var dockerBase = new CircleCI.executors.DockerExecutor(
    "cimg/base:2023.02",
    "small"
  );

  // Define hello job
  var testJob = new CircleCI.Job("hello", dockerBase);
  testJob.addStep(new CircleCI.commands.Run({command: "echo hello john"}));
  testConfig.addJob(testJob);

  // Define workflow
  var testWorkflow = new CircleCI.Workflow("hello-workflow");
  testWorkflow.addJob(testJob);
  
  // Add workflow to test config
  testConfig.addWorkflow(testWorkflow);

  // Generate JSON config
  testConfig = testConfig.writeFile('test_workflow.yml');

  var basicConfig = basicWorkflow.basicConfig();

  expect(fs.readFileSync('basic_workflow.yml')).toEqual(fs.readFileSync('test_workflow.yml'));

});