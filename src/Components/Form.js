import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Form() {
    let navigate = useNavigate();

    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const handleEmailChange = (e) => {
        setEmailInput(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    }
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let hardcodedCred = {
            email: 'admin',
            password: '1'
        }

        if ((emailInput === hardcodedCred.email) && (passwordInput === hardcodedCred.password)) {
            //combination is good. Log them in.
            //this token can be anything. You can use random.org to generate a random string;
            const token = '123456abcdef';
            sessionStorage.setItem('auth-token', token);
            //go to www.website.com/todo
            navigate('/Main');
            window.location.reload();
        } else {
            //bad combination
            alert('wrong email or password combination');
        }
    }
    return (
        <>
            <section className='  col-md-12 over ov'>
                <div className="h-p100 mx-auto">
                    <div className="row align-items-center justify-content-md-center h-p100">

                        <div className="col-12">
                            <div className="row no-gutters">
                                <div className="col-lg-4 col-md-5 col-12 col-sm-3  mx-auto">
                                    <div className="content-top-agile p-10">
                                        <h2>Zellbury</h2>
                                        <h4>Login To Start Your Session</h4>
                                        <h6 className='text-danger dis'>Wrong Password Or User Name</h6>
                                    </div>
                                    <div className="p-30 content-bottom rounded bg-img box-shadowed"
                                        data-overlay="8">
                                        {/* <form action="../index.html" method="post" > */}
                                        <form onSubmit={handleLoginSubmit}>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span
                                                            className="input-group-text bg-transparent bt-0 bl-0 br-0 no-radius text-white"><i
                                                                className="ti-user"></i></span>
                                                    </div>
                                                    <input type="text"
                                                        className="form-control pl-15 bg-transparent bt-0 bl-0 br-0 text-white"
                                                        placeholder="Username" required value={emailInput}
                                                        onChange={handleEmailChange} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text  bg-transparent bt-0 bl-0 br-0 text-white"><i
                                                            className="ti-lock"></i></span>
                                                    </div>
                                                    <input type="password"
                                                        className="form-control pl-15 bg-transparent bt-0 bl-0 br-0 text-white"
                                                        placeholder="Password" required
                                                        value={passwordInput}
                                                        onChange={handlePasswordChange} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="checkbox text-white">
                                                        <input type="checkbox" id="basic_checkbox_1" />
                                                        <label htmlFor="basic_checkbox_1">Remember Me</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <input type="submit" className="btn btn-primary" />
                                            </div>



                                        </form>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Form