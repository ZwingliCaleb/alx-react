// task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css'; // Import the CSS file

class BodySectionWithMarginBottom extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className="bodySectionWithMargin">
        <BodySection title={title}>{children}</BodySection>
      </div>
    );
  }
}

// Defining propTypes for props
BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BodySectionWithMarginBottom;
