import { NodePlopAPI } from 'node-plop'
import { imageGenerator } from './generators'
import { sanitize } from './helpers'

export default function plop(plop: NodePlopAPI) {
  plop.setGenerator('image', imageGenerator)
  plop.setHelper('sanitize', sanitize)
}
