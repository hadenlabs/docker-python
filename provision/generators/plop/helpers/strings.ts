export const sanitize = (name: string) => {
  return name.replace(/[.-]+/g, '').toString()
}

export const cleanString = (text: string): string => {
  return text.replace(/[.-_]+/g, ' ').toLowerCase()
}

export const hyphenate = (text: string): string => {
  return text.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
}
