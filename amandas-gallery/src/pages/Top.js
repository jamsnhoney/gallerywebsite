import '../pretty/Top.css';

import '../assets/smiskiiii.png'

function Top() {
  return (
    <div className="top">
    <div className="hello">
    <div className="title">
        <img src= {require('../assets/smiskiiii.png')} alt="smiski" className="smiski-image" />
        <h1> amanda zhu .ᐟ </h1>
    </div>
    <div className="bullets">
        <p> ⊹ uix/ux/graphic/logo design</p>
        <p> ⊹ growing queen's ux club (co-founded last year)</p>                
        <p> ⊹ studying biomedical computing @ queen's u</p> 
    </div>
    </div>
    <div className="navbar">
        <p>all</p>
        <p>work</p>
        <p>fun-work</p>
        <p>contact</p>
        <p>resume</p>
    </div>
    </div>
    
  );
}

export default Top;