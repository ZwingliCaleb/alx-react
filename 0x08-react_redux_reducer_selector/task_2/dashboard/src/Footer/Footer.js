import React, { useContext } from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext';

function Footer() {
  const isIndex = true;
  
  // Use the useContext hook to access the UserContext
  const { user } = useContext(AppContext);

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

export default Footer;
