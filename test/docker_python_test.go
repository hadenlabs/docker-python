package test

import (
	"testing"

	"github.com/gruntwork-io/terratest/modules/docker"
	"github.com/stretchr/testify/assert"
)

func TestDockerPython380SlimSuccess(t *testing.T) {
	tag := "hadenlabs/docker-python"
	buildOptions := &docker.BuildOptions{
		Tags: []string{tag},
	}

	docker.Build(t, "../images/3.8.0-slim", buildOptions)

	opts := &docker.RunOptions{Command: []string{"python", "--version"}}
	output := docker.Run(t, tag, opts)
	assert.Equal(t, "Python 3.8.0", output)
}
