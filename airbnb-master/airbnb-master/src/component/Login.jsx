import "../Login.css"

const Login = () =>{
    return<div className="container"><div className="login-box" style={{position:"absolute",top:"35px",zIndex:3}}>
    <h1>Login</h1>
    <form action="#" method="POST">
        <div className="textbox">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required/>
        </div>
        <div className="textbox">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required/>
        </div>
        <button type="submit" className="btn">Login</button>
        <a href="#" className="forgot">Forgot Password?</a>
    </form>
</div>
</div> 
}

export default Login;