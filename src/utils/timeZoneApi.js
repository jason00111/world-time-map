export const baseUrl = 'https://maps.googleapis.com/maps/api/timezone/json'

export const timeZoneApiUrl = ({ lat, lng }) => {
  const timestamp = Math.round(Date.now() / 1000)
  const apiKey = 'AIzaSyDcC_Az3X5ekJPN8PxKCnfAqaNFcU-SNwE'

  return `${baseUrl}?location=${lat},${lng}&timestamp=${timestamp}&key=${apiKey}`
}
