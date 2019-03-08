import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Map, Marker } from 'react-leaflet';

import DeviceStore from "../../stores/DeviceStore";
import MapTileLayer from "../../components/MapTileLayer";


const styles = {
  card: {
    overflow: "visible",
  },
};


class MapDevice extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(device) {
    DeviceStore.update(device, resp => {
      this.props.history.push(`/organizations/${this.props.match.params.organizationID}/applications/${this.props.match.params.applicationID}`);
    });
  }

  render() {
    const style = {
      height: 600,
    };

    let position = [];
    if (typeof (this.props.device.latitude) !== "undefined" && typeof (this.props.device.longitude !== "undefined")) {
      position = [this.props.device.latitude, this.props.device.longitude];
    } else {
      position = [0, 0];
    }

    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper>
            <Map center={position} zoom={15} style={style} animate={true} scrollWheelZoom={false}>
              <MapTileLayer />
              <Marker position={position} />
            </Map>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(withRouter(MapDevice));
