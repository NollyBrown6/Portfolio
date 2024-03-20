/* eslint-disable import/no-extraneous-dependencies */
// import frameworks and libraries
import React from 'react';

// import UI Components
import { Dropdown } from 'rsuite';

// import custom Components

// import stylesheets
import './LocaleToggler.scss';

function LocaleToggler() {
  return (
    <div>
      <Dropdown title="Langue" appearance="subtle">
        <Dropdown.Item>Français</Dropdown.Item>
        <Dropdown.Item>Anglais</Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default LocaleToggler;
