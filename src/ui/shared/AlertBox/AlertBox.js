import React, { Component } from 'react';
import {connect} from 'react-redux';
import './alert-box.css';
import store from '../../../redux/store.js';

class AlertBox extends Component {

  componentDidMount = () => {
    var fixed = document.getElementById('fixed');
    fixed.addEventListener('touchmove', (e) => {
      e.preventDefault()
    })
    fixed.addEventListener('wheel', (e) => {
      e.preventDefault()
    });
  }

  render() {
    return(
      <div id="fixed" ref={value => { this.alertDiv = value }}
        className={this.props.showAlert ? "alert-box show": "alert-box"}>
        <div className="alert-box-card">
          { this.props.alertMessage }
          <div
            onClick={() => {
              store.dispatch({ type: 'HIDE_ALERT' })
            }}
            className="alert-actions">
            关闭
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  showAlert: state.account.showAlert,
  alertMessage: state.account.alertMessage
})

export default connect(mapStateToProps)(AlertBox)
