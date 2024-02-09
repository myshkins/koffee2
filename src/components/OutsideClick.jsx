import { useEffect, useRef } from "react";

const OutsideClick = ( props ) => {

  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(e) {
      const { current } = wrapperRef
      if (current && !current.contains(e.target)) {
        props.onClickOutside()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [wrapperRef, props.onClickOutside])

  return (
    <div ref={wrapperRef}>
      { props.children }
    </div>
  );
};
export default OutsideClick;

