import React from "react";

class AddContact extends React.Component {
    state={
        name:"",
        email:"",
        mobile:"",
    }

    add =(e)=>{
        e.preventDefault();
        if(this.state.name ==="" || this.state.email ==="" || this.state.mobile ===""){
            alert("all the fields are mandatory");
            return
        }
        this.props.addcontactHandler(this.state);
        this.setState({name:"", email:"", mobile:""});
    }
    render(){
        return(
            <div className="ui main">
                <h2>Add New Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Name"
                        value={this.state.name} 
                        onChange={(e)=>this.setState({name: e.target.value})}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                        type="text" 
                        name="email" 
                        placeholder="Email"
                        value={this.state.email} 
                        onChange={(e)=>this.setState({email: e.target.value})}
                        />
                    </div>
                    <div className="field">
                        <label>Mobile</label>
                        <input 
                        type="text" 
                        name="mobile" 
                        placeholder="Number"
                        value={this.state.mobile} 
                        onChange={(e)=>this.setState({mobile: e.target.value})}
                        />
                    </div>
                    <button className="ui add button">Add</button>
                </form>
            </div>
        );
    }

}

export default AddContact;