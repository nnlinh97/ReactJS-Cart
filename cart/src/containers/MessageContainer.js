import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from './../components/Content/Message/Message';

class MessageContainer extends Component {
  render() {
    let {message} = this.props;
    return (
        <Message message={message}/>
    );
  }
}

MessageContainer.propTypes = {
  message: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);
