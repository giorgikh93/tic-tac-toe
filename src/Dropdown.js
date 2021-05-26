import React, { useRef } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const Dropdown = ({
  onChange,
  value,
  options,
  placeholder = "Select player option",
  disabled
}) => {
  const dropdownRef = useRef();



  function closeMenu() {
    if (!dropdownRef.current.classList.contains("none")) {
      dropdownRef.current.classList.add("none");
    }
  }
  function openMenu() {
    dropdownRef.current.classList.remove("none");
  }
  async function handleChange(item){
      await onChange(item)
     closeMenu()
  }
  return(
      <>
  <OutsideClickHandler onOutsideClick={closeMenu}>
    <div className="dropdown-container" onClick={()=>!disabled &&openMenu()}>
      <span className="value" >{value ? value.value : placeholder}</span>
      <div className="dropdown-child none" ref={dropdownRef}>
        {options.map((item, index) => (
          <span onClick={()=>handleChange(item)} key={index}>{item.value}</span>
        ))}
      </div>
    </div>
  </OutsideClickHandler>
  </>
  )

};

export default Dropdown;
