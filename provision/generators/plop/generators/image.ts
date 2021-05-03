import { Actions, PlopGeneratorConfig } from 'node-plop'
import * as path from 'path'
import { ImagePrompNames, Answers } from './entities'
import { baseRootPath, baseTemplatesPath, pathExists, pathMake } from '../utils'
import { sanitize } from '../helpers'
const testPath = path.join(baseRootPath, 'test')

export const imageGenerator: PlopGeneratorConfig = {
  description: 'add an image',
  prompts: [
    {
      type: 'input',
      name: ImagePrompNames.version,
      message: 'What should it be version image?',
      default: '3.9.0'
    },
    {
      type: 'confirm',
      name: ImagePrompNames.wantTest,
      default: true,
      message: 'Do you want implement test?'
    }
  ],
  actions: (data) => {
    const answers = data as Answers
    const imagePath = `${baseRootPath}/images/${answers.imageVersion}`

    if (pathExists(imagePath)) {
      throw new Error(`Stage '${answers.imageVersion}' exists in '${imagePath}'`)
    }

    pathMake(imagePath)

    const actions: Actions = []

    actions.push({
      type: 'add',
      templateFile: `${baseTemplatesPath}/image/Dockerfile.add.hbs`,
      path: `${imagePath}/Dockerfile`
    })

    if (answers.wantTest) {
      actions.push({
        type: 'add',
        templateFile: `${baseTemplatesPath}/image/test.add.hbs`,
        path: `${testPath}/docker_python_${sanitize(answers.imageVersion)}_test.go`
      })
    }

    return actions
  }
}
