import React, { Fragment, Component } from "react"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const style = {
  height: "309px",
  width: "100%",
  borderRadius: "5px"
}

const MapLocation = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={{ lat: 13.651454, lng: 100.493780 }}
    defaultZoom={17}
  >
    <Marker position={{ lat: 13.651454, lng: 100.493780 }} />
  </GoogleMap>
))

class Map extends Component {
  render () {
    return (
      <Fragment>
        <MapLocation
          containerElement={<div style={style} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </Fragment>
    )
  }
};
export default Map
