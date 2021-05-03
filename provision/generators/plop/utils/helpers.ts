import * as path from 'path'
import fs from 'fs'

export const baseRootPath = path.join(__dirname, '../../../../')
export const baseTemplatesPath = path.join(__dirname, '../templates')

export function pathExists(path: string) {
  return fs.existsSync(path)
}

export function pathMake(path: string) {
  return fs.mkdirSync(path)
}
