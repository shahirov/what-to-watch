export const convertMinsToHrsMins = (minutes: number) => {
  const hours = Math.floor(minutes / 60)
  const realMinutes = minutes % 60

  return {
    hour: hours,
    min: realMinutes
  }
}
