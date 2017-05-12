import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
      <SessionFormContainer />
    </header>
  </div>
);

export default App;
