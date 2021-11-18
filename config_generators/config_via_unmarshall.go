package main

import (
	"fmt"
	"io/ioutil"

	"gopkg.in/yaml.v3"
)

var (
	configYaml = `version: 2.1
executors:
  go:
    docker:
      - image: cimg/go:1.17.3
jobs:
  job_a:
    executor: go
    steps:
      - checkout
      - run: echo Running job a
      - run: cat path_a/README.md
  job_b:
    executor: go
    steps:
      - checkout
      - run: echo running job b
      - run: cat path_b/README.md
workflows:
  job-workflow:
    jobs:
      - job_a
      - job_b
`
)

func main() {
	c := yaml.Node{}

	err := yaml.Unmarshal([]byte(configYaml), &c)
	if err != nil {
		fmt.Printf("Error while Unmarshaling. %v", err)
	}

	yamlData, err := yaml.Marshal(&c)

	if err != nil {
		fmt.Printf("Error while Marshaling. %v", err)
	}

	fileName := "generated_config.yml"
	err = ioutil.WriteFile(fileName, yamlData, 0644)
	if err != nil {
		panic("Unable to write data into the file")
	}
}
