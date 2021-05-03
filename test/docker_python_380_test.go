package test

import (
	"testing"

	"github.com/gruntwork-io/terratest/modules/docker"
	"github.com/stretchr/testify/assert"
)

func TestPython380Success(t *testing.T) {

	tag := "hadenlabs/python:3.8.0"
	otherOptions := []string{
		"--no-cache",
	}
	buildOptions := &docker.BuildOptions{
		Tags:         []string{tag},
		OtherOptions: otherOptions,
	}

	docker.Build(t, "../images/3.8.0", buildOptions)

	opts := &docker.RunOptions{
		Command: []string{},
	}
	output := docker.Run(t, tag, opts)
	assert.NotEmpty(t, output, output)
}
