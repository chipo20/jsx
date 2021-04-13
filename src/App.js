import React from 'react';


import './style.css';

import imageInSrc from './ImageInSrc.jpg';
import Myvideo from './Myvideo.mp4';

function App() {
  return (
    <div className="App">

   <div>

     <h1 className="title red">Dribek Chiheb</h1>

<br/>

<img classeName="img1" src={imageInSrc}  alt="image_Insrc" />

<br/>

<img  classeName="img2"src="./ImageInPublic.jpg" alt="image_public" />
</div> 
<video classeName="vd" width="320" height="240" controls>

 <source  src={Myvideo} type="video/mp4" />
    </video>

     
    </div>
  );
}

export default App;
