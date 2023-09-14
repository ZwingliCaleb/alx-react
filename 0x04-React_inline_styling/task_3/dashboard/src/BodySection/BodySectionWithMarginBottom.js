// task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  marginbotttom: {
    marginBottom: '40px',
  }
})

class BodySectionWithMarginBottom extends Component {
  render() {

    return (
      <div className = {css(styles.marginbottom)}>
        <BodySection> {...this.props} </BodySection>
      </div>
    );
  }
}

// Defining propTypes for props
BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string, PropTypes.element
  ])
};

export default BodySectionWithMarginBottom;
