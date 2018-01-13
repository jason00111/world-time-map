export const baseUrl = 'https://api.sunrise-sunset.org/json'

export const sunApiUrl = ({ lat, lng }) => {
  return `${baseUrl}?lat=${lat}&lng=${lng}&formatted=0`
}
