export const formatDate = (date: Date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-EN', options)
}
