import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
// import AppContext from '../App/AppContext';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
function Footer({ user }) {
  const isIndex = true;

  return (
    <footer className='App-footer'>
      <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>

      {user.loggedIn && (
        <p>
          <a href="/contact">Contact us</a>
        </p>
      )}
    </footer>
  );
}

Footer.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.uiReducer,
  };
};

export default connect(mapStateToProps)(Footer);
