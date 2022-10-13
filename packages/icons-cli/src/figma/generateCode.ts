export const generateTypeDefinition = (
  iconFiles: string[]
) => `/** This file is auto generated. DO NOT EDIT BY HAND. */

const icons = {
${iconFiles
  .map((fullName) => `  '${fullName}': require('../svg/${fullName}.svg'),`)
  .join('\n')}
} as const;

export default icons;
export type KnownIconFile = keyof typeof icons;
export const KNOWN_ICON_FILES = Object.keys(icons) as KnownIconFile[];
`
