import React from "react";
import Card from "./contactcard";

const List = (props) =>{
    const renderList=props.contacts.map((contact)=>{
        return<Card contact={contact}/>;
    });
    return (
        <div className="ui list">
            {renderList}
        </div>
    );
}

export default List;