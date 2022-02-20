import React from 'react';
import './App.css';

import Stories from './Stories';

const App = ({ stories, onArchive }) => (
  <Stories 
    stories={stories} 
    onArchive={onArchive} />
);

export default App;
