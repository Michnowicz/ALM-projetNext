import "./Login.css"
import Link from "next/link"

export default function Login() {
    

    return(
        <section className="Login">
            <div className="logDiv">
                <div className="LogInDiv">
                    <h1>Login</h1>
                    <div className="LogInputs">
                        <input type="text" placeholder="username" className="pillInput"/>
                        <input type="text" placeholder="password" className="pillInput"/>
                    </div>
                    <div className="LogInBtn">
                        <Link href="/login"  className="logBtn">
                            <button className="btnBlue">Login</button>
                        </Link>
                    </div>
                </div>
                <div className="logBreak">
                    <hr />
                    <p>or</p>
                    <hr />
                </div>
                <div className="subscription">
                    <Link href="/login" className="logBtn">
                        <button className="btnBlue">Create Account</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}