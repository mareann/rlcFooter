//npm install --save typeface-nunito
//in your index.js
//require("typeface-nunito")
//TO GET nunito font for rlc
//npm install --save @fortawesome/fontawesome-free
//npm install --save @fortawesome/free-brands-svg-icons
//import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
//import { fas } from '@fortawesome/free-solid-svg-icons'
//import { faTwitter } from '@fortawesome/free-brands-svg-icons'
//import { library } from '@fortawesome/react-fontawesome'
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import 'react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'
import { fab,faFacebook } from '@fortawesome/free-brands-svg-icons'


require("typeface-nunito")
library.add(faGhost,fab, faFacebook)

ReactDOM.render(<App />, document.getElementById("root"));
