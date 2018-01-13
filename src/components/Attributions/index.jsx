import React from 'react'
import Typography from 'material-ui/Typography'

export default () => (
  <div style={{
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center'
  }}>
    <Typography
      style={{
        backgroundColor: 'rgb(245, 245, 245)',
        color: 'rgb(68, 68, 68)',
        opacity: '0.7',
        fontSize: '10px',
        lineHeight: '14px',
        height: '14px',
        paddingLeft: '6px',
        paddingRight: '6px'
      }}
      noWrap
    >
      This app uses the <a
        href='https://sunrise-sunset.org/'
        style={{ textDecoration: 'none' }}
      >
        sunrise-sunset.org
      </a> <a
        href='https://sunrise-sunset.org/api'
        style={{ textDecoration: 'none' }}
      >
        API
      </a>
    </Typography>
  </div>
)
