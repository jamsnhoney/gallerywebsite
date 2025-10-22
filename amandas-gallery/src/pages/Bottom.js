import React from 'react';
import '../pretty/Bottom.css'

function Bottom() {
  return (
    <div className="bottom">

    <div className="bottom-left">
        <p> °‧ design & 𓆝 coded 𓆟 𓆞 ·｡ </p>
    </div>

    {/* <div className="bottom-right">
        <p>instagram &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; @a_zoo_studio</p>
        <p>email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; zhuu.amanda@gmail.com</p>
    </div> */}
      <div className="bottom-right">
    <p>
      instagram &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a
        href="https://www.instagram.com/a_zoo_studio"
        target="_blank"
        rel="noopener noreferrer"
      >
        @a_zoo_studio
      </a>
    </p>
    <p>
      email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="mailto:zhuu.amanda@gmail.com">
        zhuu.amanda@gmail.com
      </a>
    </p>
  </div>


    </div>
  );
}

export default Bottom;
