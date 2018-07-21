import React from 'react';
import ReactDOM from 'react-dom';
import io from "socket.io-client";
io.connect("http://localhost:3000");

ReactDOM.render(<h1>Ankit</h1>, document.getElementById('root'));