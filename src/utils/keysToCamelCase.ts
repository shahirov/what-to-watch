export const renameKeysToCamelCase = (obj: object) =>
  Object.entries(obj).reduce((acc: object, [key, value]) => {
    const modifiedKey = key.replace(/_([a-z])/g, g => g[1].toUpperCase())
    return {
      ...acc,
      ...{ [modifiedKey]: value }
    }
  }, {})
