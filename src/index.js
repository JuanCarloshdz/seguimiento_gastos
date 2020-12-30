import React from 'react';
import ReactDom from 'react-dom';

import App from './App'
import "./index.css";

import { Provider } from './context/context'
import { SpeechProvider } from '@speechly/react-client'

ReactDom.render(

    <SpeechProvider
        appId="8bbcc304-46b4-4cd0-b2a3-0f7770940e0c"
        language="en-US" >
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>



    , document.getElementById('root'));

