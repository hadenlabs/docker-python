export enum ImagePrompNames {
  'name' = 'imageName',
  'wantTest' = 'wantTest'
}

export type Answers = { [P in ImagePrompNames]: string }
