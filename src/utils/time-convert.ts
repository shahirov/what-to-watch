export const convertMinsToHrsMins = (minutes: number) => {
  const hours = Math.floor(minutes / 60)
  const realMinutes = minutes % 60

  return {
    hour: hours,
    min: realMinutes
  }
}

export const convertSecsToHrsMinsSecs = (secs: number) => {
  const pad = (num: number, size: number) => (`00` + num).slice(size * -1)
  const time = parseFloat(secs.toFixed(2))
  const hours = Math.floor(time / 60 / 60)
  const minutes = Math.floor(time / 60) % 60
  const seconds = Math.floor(time - minutes * 60)

  return hours + `:` + pad(minutes, 2) + `:` + pad(seconds, 2)
}
