import { Actions, PlopGeneratorConfig } from 'node-plop'
import * as path from 'path'
import { ImagePrompNames, Answers } from './entities'
import { baseRootPath, baseTemplatesPath, pathExists, pathMake, sanitize } from '../utils'
const testPath = path.join(baseRootPath, 'test')

export const imageGenerator: PlopGeneratorConfig = {
  description: 'add an image',
  prompts: [
    {
      type: 'input',
      name: ImagePrompNames.name,
      message: 'What should it be image?',
      default: 'youtubedl'
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
    const imagePath = `${baseRootPath}/images/${sanitize(answers.imageName)}`

    if (pathExists(imagePath)) {
      throw new Error(`Stage '${answers.imageName}' exists in '${imagePath}'`)
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
        path: `${testPath}/docker_${sanitize(answers.imageName)}_test.go`
      })
    }

    return actions
  }
}
