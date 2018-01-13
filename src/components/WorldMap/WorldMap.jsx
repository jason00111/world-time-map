import React from 'react'
import PropTypes from 'prop-types'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  InfoWindow
} from 'react-google-maps'
import { compose, withProps, withStateHandlers } from 'recompose'
import Paper from 'material-ui/Paper'
import { CircularProgress } from 'material-ui/Progress'

import InfoBox from '../InfoBox'
import Attributions from '../Attributions'

const mapHeight = '98vh'

const loadingElement = (
  <Paper style={{
    height: mapHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <CircularProgress size={100} />
  </Paper>
)

const withSetup = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4CQmJg5SiNkSRdXO8mEoFVa8wFOBIQTI',
    loadingElement,
    containerElement: <Paper style={{ height: mapHeight, position: 'relative' }} />,
    mapElement: <div style={{ height: '100%' }} />
  }),
  withStateHandlers(
    () => ({ isInfoOpen: false, mapRef: null }),
    {
      openInfo: () => () => ({ isInfoOpen: true }),
      closeInfo: () => () => ({ isInfoOpen: false }),
      saveMapRef: () => (ref) => ({ mapRef: ref })
    }
  ),
  withScriptjs,
  withGoogleMap
)

const WorldMap = withSetup(
  ({
    lat,
    lng,
    setLocationHandler,
    isInfoOpen,
    openInfo,
    closeInfo,
    error,
    mapRef,
    saveMapRef
  }) => {

    const clickHandler = (input) => {
      closeInfo()
      setLocationHandler(input)
      openInfo()
    }

    return (
      <GoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: 0, lng: 0 }}
        onClick={clickHandler}
        options={{ streetViewControl: false }}
        ref={saveMapRef}
        defaultMapTypeId={'satellite'}
      >
        { lat !== undefined && lng !== undefined && isInfoOpen && !error &&
          <InfoWindow
            position={{ lat, lng }}
            onCloseClick={closeInfo}
          >
            <InfoBox />
          </InfoWindow>
        }
        <Attributions />
      </GoogleMap>
    )
  }
)

WorldMap.propTypes = {
  setLocationHandler: PropTypes.func,
  lat: PropTypes.number,
  lng: PropTypes.number
}

export default WorldMap
