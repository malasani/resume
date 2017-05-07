import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as hello from './components/hello';

ReactDOM.render(<hello.Hello compiler="TypeScript" framework="react" />, document.getElementById('app'));