export const baseUrl = 'https://maps.googleapis.com/maps/api/timezone/json'

export const timeZoneApiUrl = ({ lat, lng }) => {
  const timestamp = Math.round(Date.now() / 1000)
  const apiKey = 'AIzaSyBDLrejufhsr9V6th_MnA43SoUYawLA0m4'

  return `${baseUrl}?location=${lat},${lng}&timestamp=${timestamp}&key=${apiKey}`
}
