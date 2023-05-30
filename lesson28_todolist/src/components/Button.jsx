import React from "react";

export const Button = ({ children, onClick}) => {
    var elementColor = '';
    if (children === '修改') {
        elementColor = 'ui yellow button btn btn-sm ';
    }else if (children === '刪除'){
        elementColor = 'ui red button btn btn-sm';
    }else {
        elementColor = 'ui olive button btn btn-sm'
    }
    return (
        <button onClick={onClick} className={elementColor}>
            {children}
        </button>
    );
};
export default Button;