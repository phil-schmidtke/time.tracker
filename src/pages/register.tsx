import { Button, Grid, Input } from "@nextui-org/react";
import { BlockList } from "net";
import { useEffect, useState } from "react";

export default function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    useEffect(() => {
        console.log(username)
    })

    return (

        <div style={{ display: "flex", marginTop: "124px" }}>
            <div className="auth-form">
                <div style={{ display: "flex" }}>
                    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="icon-size">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                </div>
                    <div className="form-spacer" >
                        <Input labelPlaceholder="Username" css={{ display: "block" }} value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                    </div>
                    <div className="form-spacer" >
                        <Input labelPlaceholder="E-Mail" css={{ display: "block" }} value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <div className="form-spacer">
                        <Input.Password labelPlaceholder="Password" css={{ display: "block" }} value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>
                    <div style={{ marginTop: "40px" }}>
                    <Input.Password labelPlaceholder="Confirm" css={{ display: "block" }} value={confirm} onChange={(e)=>{setUsername(e.target.value)}} />
                    </div>
                <Button shadow css={{ width: "100%" }} style={{ marginTop: "24px" }}>Sign Up</Button>
            </div>
        </div>
    
    );
}