import React from "react"
import Typed from "typed.js"

const TypedText = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>Web and Mobile App Developer</i>"],
      typeSpeed: 40,
      //   showCursor: true,
      //   cursorChar: "|",
      //   autoInsertCss: true,
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    }
  }, [])

  return (
    <div>
      <span ref={el} />
    </div>
  )
}

export default TypedText
