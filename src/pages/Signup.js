
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () =>  {
    const API_URL = "http://localhost/www/AppleStore/Backend/";
    const appleAccountSignUp = {
        'post': API_URL + 'sign-up/user-account-post.php',
    }
    const navigate = useNavigate();

    const [formData, setFormData] = useState({});

    const handleInputChange = (event) => {
      const { name, value, type, checked } = event.target;
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }

    useEffect(() => {
        // Set default values for form data when the component mounts
        setFormData({
          country: 'Vietnam',
          verify_with: 'Text message',
          announcements: 'subcribed',
          ads: 'subcribed',
          password: '',
          confirm_password: '',
        });
      }, []);

    const submitForm = (event) => {
        event.preventDefault();
        fetch(appleAccountSignUp.post,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then((data) => {
            if (data.msg=="ok") {
                alert('Successfully. You should be directed to login page!')
                navigate('./../signin')
            } else if (data.msg=="email error") {
                alert('Email already exists!')
            } else {alert('Please check again')}
          })
    }

    // Check if passwords do not match 
    const [passwordMatch, setPasswordMatch] = useState(true);
    useEffect(() => {
        if (formData.password === formData.confirm_password) {
          setPasswordMatch(true);
        } else {
          setPasswordMatch(false);
        }
      }, [formData]);

    return (
        <>
            <section>
                <div class="section-header">
                    <div class="section-header-nav">
                        <h2 style={{fontWeight:'lighter'}}>Apple ID</h2>
                        <div class="header-nav-item">
                            <Link style={{color:'#666'}} class="none-address-style" className="nav-items" to="/signin">Sign In</Link>
                            <a style={{color:'#666'}} class="none-address-style" href="">Create your Apple ID</a>
                            <a style={{color:'#666'}} class="none-address-style" href="">FAQ</a>
                        </div>
                    </div>
                </div>

                <div class="section-body">
                    <form id="form-signup" action="" onSubmit={submitForm}>
                        <div class="body-first">
                            <div style={{textAlign:'center'}}>
                                <h1 style={{marginTop:'54px'}}>Create Your Apple ID</h1>
                                <p>One Apple ID is all you need to access all Apple services.<br></br>Already have an Apple ID? <span><a style={{color:'#0070C9'}} class="none-address-style" href="">Find it here {'>'}</a></span></p>
                            </div>

                            <div>
                                <input name="first_name" class="input-half" type="text" placeholder="First name" onChange={handleInputChange} />
                                <input name="last_name" style={{marginLeft:'30px'}} class="input-half" type="text" placeholder="Last name" onChange={handleInputChange} />
                            </div>

                            <div>
                                <p style={{fontSize:'16px',color:'666',fontWeight:'bolder',paddingTop:'15px'}}>COUNTRY / REGION</p>
                                <select class="input-full country" name="country" id="country" value={formData.country} onChange={handleInputChange}>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="United State">United State</option>
                                </select>
                                <br></br>
                                <input id="datepicker" name="birthday" class="input-full" type="text" placeholder="Birthday (DD/MM/YYYY)" onChange={handleInputChange}/>                               
                            </div>

                        </div>

                        <div class="body-second">
                            <input name="email" class="input-full" type="email" placeholder="name@example.com" onChange={handleInputChange} /><br></br>
                            <label for="email" style={{fontSize:'12px',color:'#666'}}>This will be your new Apple ID.</label><br></br>
                            <input name="password" id="password" class="input-full" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} /><br></br>
                            <input name="confirm_password" id="confirm_password" class="input-full" type="password" placeholder="Confirm password" value={formData.confirm_password} onChange={handleInputChange} /><span style={{fontSize:'12px'}} id='message'>{!passwordMatch && <div style={{color: 'red'}}>Passwords do not match</div>}</span>
                        </div>

                        <div class="body-third">
                            <input name="phone" class="input-full" type="tel" placeholder="Phone number" id="phone" onChange={handleInputChange} /><br></br>
                            <small>Be sure to enter a phone number you can always access. It will be used to verify your identity any time you sign in on a new device or web browser. Messaging or data rates may apply.</small>
                            <div class="third-verify">
                                <p for="verify_with" >Verify with:</p>
                                    <input type="radio" name="verify_with" defaultValue="Text message" value={formData.verify_with} onChange={handleInputChange} defaultChecked/>
                                    <label for="Text message">Text message</label><br></br>
                                    <input type="radio" name="verify_with" defaultValue="Phone call" onChange={handleInputChange}/>
                                    <label for="Phone call">Phone call</label><br></br>
                            </div>
                        </div>

                        <div class="body-fourth">
                            <div onChange={handleInputChange}>
                                {/* <!-- <input type="hidden" name="announcements" value="Not subcribed"> --> */}
                                <input type="checkbox" name="announcements" defaultValue="Subcribed" value={formData.announcements} onChange={handleInputChange} defaultChecked/>
                                <label for="announcements"> Announcements</label><br></br>
                                <small>Receive Apple emails and communications including announcements, marketing, recommendations, and updates about Apple products, services and software.</small>
                            </div>
                            <div onChange={handleInputChange}>
                                {/* <!-- <input type="hidden" name="ads" value="Not subcribed"> --> */}
                                <input type="checkbox" name="ads" defaultValue="Subcribed" value={formData.ads} onChange={handleInputChange} defaultChecked/>
                                <label for="ads"> Apps, Music, TV, and More</label><br></br>
                                <small>Receive Apple emails and communications including new releases, exclusive content, special offers, and marketing and recommendations for apps, music, movies, TV, books, podcasts, Apple Pay, Apple Card and more.</small>
                            </div>
                        </div>

                        <div class="body-fifth">
                            <img style={{height:'40px'}} src="https://www.apple.com/legal/images/icon_dataprivacy_2x.png" alt=""/><br></br>
                            <small>
                            Your Apple ID information is used to allow you to sign in securely and access your data. Apple records certain data for security, support and reporting purposes. If you agree, Apple may also use your Apple ID information to send you marketing emails and communications, including based on your use of Apple services.
                            <a class="none-address-style" href="" style={{color:'#0070C9'}}> See how your data is managed.</a>
                            </small><br></br>
                            <input id="form-submit" type="submit" name="submit" value="Continue"/>
                        </div>

                    </form>
                </div>
            </section>
        </>
    )
}

export default Signup