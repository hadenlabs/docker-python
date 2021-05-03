export enum ImagePrompNames {
  'version' = 'imageVersion',
  'wantTest' = 'wantTest'
}

export type Answers = { [P in ImagePrompNames]: string }
