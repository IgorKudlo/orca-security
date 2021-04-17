import React from 'react';
import logo from '../../img/logo.svg';

const Logo = ({ className }) => {
  return (
    <a href={"https://orca.security/"} className={className}>
      <img width={95} height={40} src={logo} title={"Orca security"} alt="Orca security"/>
    </a>
  )
}

export default Logo;