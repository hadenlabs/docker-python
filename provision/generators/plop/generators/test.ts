import { Actions, PlopGeneratorConfig } from 'node-plop'
import slugify from 'slugify'
import * as path from 'path'
import { baseGeneratorPath, baseTemplatesPath, pathExists, pathMake } from '../utils'

export enum TestPrompNames {
  'testName' = 'testName',
  'testImage' = 'testImage',
}

type Answers = { [P in TestPrompNames]: string }

const testPath = path.join(baseGeneratorPath, 'test')

export const testGenerator: PlopGeneratorConfig = {
  description: 'add an path to test',
  prompts: [
    {
      type: 'input',
      name: TestPrompNames.testName,
      message: 'What should it be test?',
      default: 'basic',
    },
    {
      type: 'input',
      name: TestPrompNames.testImage,
      message: 'What should it be image?',
      default: '3.8.0-slim',
    },
  ],
  actions: (data) => {
    const answers = data as Answers

    const actions: Actions = []

    actions.push({
      type: 'add',
      templateFile: `${baseTemplatesPath}/test/test.append.hbs`,
      path: `${testPath}/docker_python_${slugify(answers.testName, '_')}_${slugify(
        answers.testImage,
        '_'
      )}_test.go`,
      abortOnFail: true,
    })

    return actions
  },
}
