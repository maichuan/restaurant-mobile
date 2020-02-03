import React, { useState, useEffect } from 'react';
import { Provider } from 'mobx-react'
import Main from './src/views/main.jsx'

export default App = () => {

  return (
    <Provider rootStore={rootStore}>
      <Main />
    </Provider>
  )
}
