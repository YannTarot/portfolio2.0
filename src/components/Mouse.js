import React, { useEffect } from 'react';

const Mouse = () => {
  //follows the cursor
  const customRef = React.useRef(null)

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX, clientY } = e
      const mouseX = clientX - customRef.current.clientWidth / 2
      const mouseY = clientY - customRef.current.clientHeight / 2
      customRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    }

    document.addEventListener('mousemove', onMouseMove)

    return () => {

      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div className="app-cursor" ref={customRef} />
  )
}

export default Mouse;
