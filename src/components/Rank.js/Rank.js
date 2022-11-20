import React from "react";

const Rank = (props) => {
    const { name, entries } = props.userData
    function capitalize(s){
    return s && s[0].toUpperCase() + s.slice(1);
}
    return (
        <div className="tc">
            <div className="white f3">
                {capitalize(name)} your current entry count ...
            </div>
            <div className="white f3">
                {`${entries}`}
            </div>
        </div>
    )
}

export default Rank;