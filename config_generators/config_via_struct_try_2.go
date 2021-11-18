// package main

// import (
// 	"fmt"
// 	"io/ioutil"

// 	"gopkg.in/yaml.v3"
// )

// type Config struct {
// 	Version   float64         `yaml:"version"`
// 	Executors ExecutorsStruct `yaml:"executors"`
// 	Jobs      Jobs            `yaml:"jobs"`
// 	Workflows Workflows
// }

// type ExecutorsStruct struct {
// 	Go GoStruct `yaml:"go"`
// }

// type GoStruct struct {
// 	Docker []Image `yaml:"docker"`
// }

// type Image struct {
// 	Image string
// }

// type Jobs struct {
// 	Job_a Job
// 	Job_b Job
// }

// type Job struct {
// 	Executor map[string]string `yaml:",inline"`
// 	Steps    []Step
// }

// type Step struct {
// 	Checkout map[string]interface{} `yaml:"checkout"`
// 	Run      Run                    `yaml:",omitempty"`
// }

// type Run struct {
// 	Name    string `yaml:",omitempty"`
// 	Command string
// }

// type Workflows struct {
// 	List map[string]*Workflow `yaml:",inline"`
// }

// type Workflow struct {
// 	Jobs []string
// }

// func main() {
// 	s1 := Config{
// 		Version: 2.1,
// 		Executors: ExecutorsStruct{
// 			Go: GoStruct{
// 				Docker: []Image{
// 					Image{
// 						Image: "cimg/go:1.17.3",
// 					},
// 				},
// 			},
// 		},
// 		Jobs: Jobs{
// 			Job_a: Job{
// 				Executor: map[string]string{"executor": "go"},
// 				Steps: []Step{
// 					Step{
// 						Checkout: map[string]interface{}{"-": "checkout"},
// 					},
// 					Step{
// 						Run: Run{
// 							Name:    "",
// 							Command: "echo Running job a",
// 						},
// 					},
// 					Step{
// 						Run: Run{
// 							Name:    "",
// 							Command: "cat path_a/README.md",
// 						},
// 					},
// 				},
// 			},

// 			Job_b: Job{
// 				Executor: map[string]string{"executor": "go"},
// 				Steps: []Step{
// 					Step{
// 						Run: Run{
// 							Name:    "",
// 							Command: "echo Running job b",
// 						},
// 					},
// 					Step{
// 						Run: Run{
// 							Name:    "",
// 							Command: "cat path_b/README.md",
// 						},
// 					},
// 				},
// 			},
// 		},
// 		Workflows: Workflows{
// 			List: map[string]*Workflow{
// 				"job-workflow": {
// 					Jobs: []string{"job_a", "job_b"},
// 				},
// 			},
// 		},
// 	}

// 	yamlData, err := yaml.Marshal(&s1)

// 	if err != nil {
// 		fmt.Printf("Error while Marshaling. %v", err)
// 	}

// 	fileName := "generated_config.yaml"
// 	err = ioutil.WriteFile(fileName, yamlData, 0644)
// 	if err != nil {
// 		panic("Unable to write data into the file")
// 	}
// }
