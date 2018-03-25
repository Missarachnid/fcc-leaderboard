import React from 'react';
import { Navbar } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <Navbar className='footer navbar-fixed-bottom'>
        <a href='http://www.mmkepler.com/' className='melissa' target='blank'><b>Melissa Kepler</b></a>
        <a href='https://github.com/Missarachnid' className='github' target='blank'><b>GitHub</b></a>
      </Navbar>
    );
  }
}

export default Footer;