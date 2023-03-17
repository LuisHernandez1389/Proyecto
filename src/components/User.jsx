import React from "react";
import { URL } from "../pages/URL";
import axios from "axios";
import '../styles/User.css'
class User extends React.Component {

    state={
		form:{
			"User":"",
			"Password":"",
            "Name":"",
            "LastName":"",
            "Email":"",
            "Phone":""
            
		}
	}
	handlerSubmit =e=>{
		e.preventDefault();
	}
	handlerChange = async e =>{
		await this.setState({
			form:{
				...this.state.form,
				[e.target.name] : e.target.value
			}
		})
		
	}
	handlerButton = ()=>{
		let url = URL ;
		axios.put(url,this.state.form)
        .then(response=>{
            console.log(response)
        })

    }

    render() {
        return(
	<React.Fragment>
    <div className="container">
    

    <div className="omb_login">
    	<h3 className="omb_authTitle">Users</h3>
		
            
		

		<div className="row omb_row-sm-offset-3 omb_loginOr">
			<div>
				<span className="omb_spanOr"><img id="img" src="https://firebasestorage.googleapis.com/v0/b/ghostgym-f8921.appspot.com/o/img_568656.png?alt=media&token=56e625ae-9dfd-428c-a451-9fc69cac1abc" /></span>
                <br /><br /><br />
            </div>
		</div>

		<div className="row omb_row-sm-offset-3">
			<div className="col-xs-12 col-sm-6">	
			    <form onSubmit={this.handlerSubmit} className="omb_loginForm" action="" autocomplete="off" method="POST">
					<div className="input-group">
						<span className="input-group-addon"><i className="fa fa-user"></i></span>
						<input type="text" className="form-control" name="User" placeholder="Usuario" onChange={this.handlerChange} />
					</div>
                    <br/>
					<span className="help-block"></span>
										
					<div className="input-group">
						<span className="input-group-addon"><i className="fa fa-lock"></i></span>
						<input  type="password" className="form-control" name="Password" placeholder="Contraseña" onChange={this.handlerChange}/>
					</div>
                    <br/>
                    <div className="input-group">
						<span className="input-group-addon"><i className="fa fa-lock"></i></span>
						<input  type="text" className="form-control" name="Name" placeholder="Nombre" onChange={this.handlerChange}/>
					</div>
                    <br/>
                    <div className="input-group">
						<span className="input-group-addon"><i className="fa fa-lock"></i></span>
						<input  type="text" className="form-control" name="LastName" placeholder="Apellido" onChange={this.handlerChange}/>
					</div>
                    <br/>
                    <div className="input-group">
						<span className="input-group-addon"><i className="fa fa-lock"></i></span>
						<input  type="text" className="form-control" name="Email" placeholder="Correo Electronico" onChange={this.handlerChange}/>
					</div>
                    <br/>
                    <div className="input-group">
						<span className="input-group-addon"><i className="fa fa-lock"></i></span>
						<input  type="text" className="form-control" name="Phone" placeholder="Telefono" onChange={this.handlerChange}/>
					</div>

                    <br/>

                    

					
				</form>
				
			</div>
			<div class="d-grid gap-2 col-6 mx-auto">
				<br/>
				<button class="btn btn-primary" onClick={this.handlerButton} type="submit">Button</button>
				
			</div>
			
    	</div>
		
		<div className="row omb_row-sm-offset-3">
			<div className="col-xs-12 col-sm-3">
				<label className="checkbox">
					<input type="checkbox" value="remember-me"/>Remember Me
				</label>
			</div>
			<div className="col-xs-12 col-sm-3">
				<p className="omb_forgotPwd">
					<a href="#">Forgot password?</a>
				</p>
			</div>
		</div>	    	
	</div>



    </div>
    </React.Fragment>
        )
    }
}

export default User