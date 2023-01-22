import { useState } from 'react';

const Accordion = ({children, title}) => {
  const [isShow, setIsShow] = useState(false)
  return (
    <div>
      <div style={{userSelect: 'none'}} onClick={() => setIsShow(prev => !prev)}>{title}</div>
      {isShow && <div>
        {children}
      </div>}
    </div>
  )
}

export default Accordion;
