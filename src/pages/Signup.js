

const Signup = () =>  { 

    

    return (
        <>
            <section>
                <div class="section-header">
                    <div class="section-header-nav">
                        <h2 style={{fontWeight:'lighter'}}>Apple ID</h2>
                        <div class="header-nav-item">
                            <a style={{color:'#666'}} class="none-address-style" href="http://localhost/www/AppleStore/Frontend/sign-in.php">Sign In</a>
                            <a style={{color:'#666'}} class="none-address-style" href="">Create your Apple ID</a>
                            <a style={{color:'#666'}} class="none-address-style" href="">FAQ</a>
                        </div>
                    </div>
                </div>

                <div class="section-body">
                    <form id="form-signup" action="">
                        <div class="body-first">
                            <div style={{textAlign:'center'}}>
                                <h1 style={{marginTop:'54px'}}>Create Your Apple ID</h1>
                                <p>One Apple ID is all you need to access all Apple services.<br></br>Already have an Apple ID? <span><a style={{color:'#0070C9'}} class="none-address-style" href="">Find it here {'>'}</a></span></p>
                            </div>

                            <div>
                                <input name="first_name" class="input-half" type="text" placeholder="First name" />
                                <input name="last_name" style={{marginLeft:'30px'}} class="input-half" type="text" placeholder="Last name" />
                            </div>

                            <div>
                                <p style={{fontSize:'16px',color:'666',fontWeight:'bolder',paddingTop:'15px'}}>COUNTRY / REGION</p>
                                <select class="input-full country" name="country" id="country">
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="United State">United State</option>
                                </select>
                                <br></br>
                                <input id="datepicker" name="birthday" class="input-full" type="text" placeholder="Birthday (DD/MM/YYYY)" />                               
                            </div>

                        </div>

                        <div class="body-second">
                            <input name="email" class="input-full" type="email" placeholder="name@example.com" /><br></br>
                            <label for="email" style={{fontSize:'12px',color:'#666'}}>This will be your new Apple ID.</label><br></br>
                            <input name="password" id="password" class="input-full" type="password" placeholder="Password" /><br></br>
                            <input name="confirm_password" id="confirm_password" class="input-full" type="password" placeholder="Confirm password" /><span style={{fontSize:'12px'}} id='message'></span>
                        </div>

                        <div class="body-third">
                            <input name="phone" class="input-full" type="tel" placeholder="Phone number" id="phone" /><br></br>
                            <small>Be sure to enter a phone number you can always access. It will be used to verify your identity any time you sign in on a new device or web browser. Messaging or data rates may apply.</small>
                            <div class="third-verify">
                                <p for="verify_with">Verify with:</p>
                                    <input type="radio" name="verify_with" value="Text message" checked/>
                                    <label for="Text message">Text message</label><br></br>
                                    <input type="radio" name="verify_with" value="Phone call"/>
                                    <label for="Phone call">Phone call</label><br></br>
                            </div>
                        </div>

                        <div class="body-fourth">
                            <div>
                                {/* <!-- <input type="hidden" name="announcements" value="Not subcribed"> --> */}
                                <input type="checkbox" name="announcements" value="Subcribed" checked/>
                                <label for="announcements"> Announcements</label><br></br>
                                <small>Receive Apple emails and communications including announcements, marketing, recommendations, and updates about Apple products, services and software.</small>
                            </div>
                            <div>
                                {/* <!-- <input type="hidden" name="ads" value="Not subcribed"> --> */}
                                <input type="checkbox" name="ads" value="Subcribed" checked/>
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