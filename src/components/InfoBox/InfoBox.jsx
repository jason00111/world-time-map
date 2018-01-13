import React from 'react'
import PropTypes from 'prop-types'
import Table, { TableBody, TableRow, TableCell } from 'material-ui/Table'
import { CircularProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import Popover from 'material-ui/Popover'
import Settings from 'material-ui-icons/Settings'
import { withStateHandlers } from 'recompose'

import TimeFormatToggle from '../TimeFormatToggle'
import SecondsToggle from '../SecondsToggle'

const InfoBox = withStateHandlers(
  () => ({ isPreferencesOpen: false, button: null }),
  {
    openPreferences: () => (event) => ({
      isPreferencesOpen: true,
      button: event.target
    }),
    closePreferences: () => () => ({ isPreferencesOpen: false })
  }
)(
  ({
    localTime,
    timeZone,
    sunrise,
    sunset,
    solarNoon,
    timeZoneFetching,
    sunFetching,
    isPreferencesOpen,
    openPreferences,
    closePreferences,
    button
  }) => {
    const oneFetching = timeZoneFetching || sunFetching

    const loading = <CircularProgress size={25}/>

    return (
      <div>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Local Time</TableCell>
              <TableCell>{ timeZoneFetching ? loading : localTime }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Time Zone</TableCell>
              <TableCell>{ timeZoneFetching ? loading : timeZone }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sunrise</TableCell>
              <TableCell>{ oneFetching ? loading : sunrise }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sunset</TableCell>
              <TableCell>{ oneFetching ? loading : sunset }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Solar Noon</TableCell>
              <TableCell>{ oneFetching ? loading : solarNoon }</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <IconButton
          style={{ position: 'absolute', right: '0', bottom: '0' }}
          onClick={openPreferences}
          disableRipple
        >
          <Settings style={{ opacity: '0.7' }} />
        </IconButton>
        <Popover
          open={isPreferencesOpen}
          anchorEl={button}
          onClose={closePreferences}
          anchorOrigin={{
            horizontal: 'center',
            vertical: 'center'
          }}
          transformOrigin={{
            horizontal: 'center',
            vertical: 'center'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TimeFormatToggle onClick={closePreferences} />
            <SecondsToggle onClick={closePreferences} />
          </div>
        </Popover>
      </div>
    )
  }
)

InfoBox.propTypes = {
  localTime: PropTypes.string,
  timeZone: PropTypes.string,
  sunrise: PropTypes.string,
  sunset: PropTypes.string,
  solarNoon: PropTypes.string,
  timeZoneFetching: PropTypes.bool,
  sunFetching: PropTypes.bool
}

export default InfoBox
