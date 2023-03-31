import { useState } from "react";
import "./light-dark.scss"
export const LightDarkSwitch = () => {
   const [isDark,setIsDark] = useState(document.documentElement.getAttribute('data-theme') === 'dark')
   const changeMode =  (isDark:boolean) => {
    if (isDark === true){
        document.documentElement.setAttribute('data-theme','light')
        setIsDark(false)
    }else{
    document.documentElement.setAttribute('data-theme','dark')
    setIsDark(true)
    }
}
    return (
        <div className="switch">
        <input type="checkbox" className="switch__input" id="Switch" checked={!isDark} onClick={() => changeMode(isDark)}/>
        <label className="switch__label" htmlFor="Switch">
            <span className="switch__indicator"></span>
            <span className="switch__decoration"></span>
        </label>
    </div>

  );
};
