import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import fetchUserData from './axios.js'


document.querySelector('#app').innerHTML =
`
  <div>
    <h1>Hello Vinit!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div id="axios">
     <div >{response.data.id}</div>
          hello
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
fetchUserData();
