import React from 'react';
import "./Form.css";

const form = () => {
    return (

        <div className='form-bg'>

            <div className='form-layout'>
                <div className='form-content'>
                    <div className="logo2">
                        <img src={process.env.PUBLIC_URL + "images/LOGO1.png"} alt="logo" />
                    </div>
                    <div className='content'>
                        <h2>It’s a delight to have you
                            <br />onboard</h2>
                        <p>Help us know you better.<br />
                         (This is how we optimize Wobot as per your needs)</p>
                    </div>
                    <form >
                        <div className="field padding-bottom--24">
                            <label for="email">Company name</label>
                            <input placeholder='e.g. Example Inc' type="name" name="company name" />
                        </div>
                        <div className="field padding-bottom--24">
                            <div className="grid--50-50">
                                <label for="password">Industry</label>

                            </div>
                            <select placeholder='Select' name="industry">
                                <option value="Select">Select</option>
                                <option value="IT">IT</option>
                                <option value="Education">Education</option>
                                <option value="Commerce">Commerce</option>
                            </select>
                        </div>

                        <div className='field '>
                            <div className="grid--50-50">
                                <label for="password">Company-size</label>

                            </div>
                            <div className='btn-grp'>
                                <button type="submit" class="msgBtn">1-20</button>
                                <button type="submit" class="msgBtn">21-50</button>
                                <button type="submit" class="msgBtn">51-200</button>
                                <button type="submit" class="msgBtn">201-500</button>
                                <button type="submit" class="msgBtn">500+</button>
                            </div>
                        </div>

                        <div className="padding-bottom--24">
                            <input type="submit" name="submit" value="Get Started" />
                        </div>


                    </form>
                </div>
            </div>

        </div>




    )
}

export default form;