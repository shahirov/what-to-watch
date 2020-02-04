export const normalizeObjectKeys = <T extends object>(obj: T) =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    const modifiedKey = key.replace(/_([a-z])/g, g => g[1].toUpperCase())
    return {
      ...acc,
      ...{ [modifiedKey]: value }
    }
  }, {} as T)
