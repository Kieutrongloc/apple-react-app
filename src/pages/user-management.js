import { Link } from "react-router-dom";
import React, { useRef, useEffect } from 'react';
import '../assets/css/user-management.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt, faKey, faUserShield, faUser, faUserGroup, faPersonWalkingDashedLineArrowRight, faCalendarDays, faUserTie, faEarthAsia, faComment, } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';

const UserManagement = () => {
    const API_URL = "http://localhost/www/AppleStore/Backend/";
    const appleAccount = {
        'get': API_URL + 'sign-in/user-account-get.php',
        'post': API_URL + 'sign-in/user-account-post.php',
        'management': API_URL + 'user-management/user-management.php',
    }
    // Delete user from localStorage when clicking signOut
    const signOut = () => {
        window.localStorage.removeItem('user')
        window.location.href="/"
    }

    const userDb = JSON.parse(window.localStorage.getItem('user'))
    const signInBody = [
        {id: 1, ptitle: 'Apple ID', psub: userDb.email, onclick: () => popupAppleID(), icon: faAppleAlt},
        {id: 2, ptitle: 'Password', psub: 'Secure your account', onclick: () => popupPassword(), icon: faKey},
        {id: 3, ptitle: 'Account Security', psub: 'Two-facter authentication', onclick: () => alert('Function updating'), icon: faUserShield},
        {id: 4, ptitle: 'Account Recovery', psub: 'Not set up', onclick: () => alert('Function updating'), icon: faUser},
        {id: 5, ptitle: 'Legacy Contact', psub: 'Not set up', onclick: () => alert('Function updating'), icon: faUserGroup},
        {id: 6, ptitle: 'Sign in with Apple', psub: '7 apps and websites', onclick: () => alert('Function updating'), icon: faPersonWalkingDashedLineArrowRight},
        {id: 8, ptitle: 'App-Specific Passwords', psub: 'View details', onclick: () => alert('Function updating'), icon: faKey}
    ]

    const personalBody = [
        {id: 1, ptitle: 'Name', psub: userDb.first_name +' '+ userDb.last_name, onclick: () => popupName(), classname:'user-name', icon: faUser},
        {id: 2, ptitle: 'Birthday', psub: userDb.birthday, onclick: () => popupBirthday(), classname:'user-birthday', icon: faCalendarDays},
        {id: 3, ptitle: 'Avatar', psub: 'Uploaded', onclick: () => popupAvatar(), classname:'', icon: faUserTie},
        {id: 4, ptitle: 'Country / Region', psub: userDb.country, classname:'user-country', onclick: () => popupCountryRegion(), icon: faEarthAsia},
        {id: 5, ptitle: 'Languages', psub: userDb.country, onclick: () => alert('Function updating'), classname:'user-country', icon: faComment},
        {id: 6, ptitle: 'Reachable at', psub: userDb.phone, onclick: () => popupLanguages(), classname:'user-phone', icon: faComment},
    ]

    //Show article on aside click
    const articleSignIn = useRef(null)
    const articlePersonal = useRef(null)
    const showSignIn = (event) => {
        event.target.style.fontWeight='bold'
        event.target.parentElement.getElementsByTagName("li")[1].style.fontWeight='normal'
        articleSignIn.current.style.display='block'
        articlePersonal.current.style.display='none'
    }
    
    const showPersonal = (event) => {
        event.target.style.fontWeight='bold'
        event.target.parentElement.getElementsByTagName("li")[0].style.fontWeight='normal'
        articlePersonal.current.style.display='block'
        articleSignIn.current.style.display='none'
    }

    // Open pop up after clicking article box
    const popupBoxAppleID = useRef(null)
    const popupAppleID = () => {
        popupBoxAppleID.current.style.display='block'
    }

    const popupBoxPassword = useRef(null)
    const popupPassword = () => {
        popupBoxPassword.current.style.display='block'
    }

    const popupBoxName = useRef(null)
    const popupName = () => {
        popupBoxName.current.style.display='block'
    }

    const popupBoxBirthday = useRef(null)
    const popupBirthday = () => {
        popupBoxBirthday.current.style.display='block'
    }

    const popupBoxAvatar = useRef(null)
    const popupAvatar = () => {
        popupBoxAvatar.current.style.display='block'
    }

    const popupBoxCountryRegion = useRef(null)
    const popupCountryRegion = () => {
        popupBoxCountryRegion.current.style.display='block'
    }

    const popupBoxLanguages = useRef(null)
    const popupLanguages = () => {
        popupBoxLanguages.current.style.display='block'
    }

    // Update information after clicking update via RESTful API
    const id = JSON.parse(window.localStorage.getItem('user')).id
    // Update Apple ID
    const updateAppleID = (event) => {
        const emailInput = event.target.parentElement.parentElement.querySelector(".popup-box-body").querySelector("input").value
        if (!/\S+@\S+\.\S+/.test(emailInput)){
            alert('Please enter valid email')
        } else {
            var options = {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
              };
            fetch(appleAccount.management +'/?id=' + id +'&email=' + emailInput, options)
                .then(function(response) {
                    response.json().then(function(data){
                      localStorage.setItem("user", JSON.stringify(data));
                    })
                })
                .then(function() {alert("Updated successful!"); closeBox(event); window.location.reload();
            });
        }
    }

    //Update password
    // Check password if not the same
    $('#password').keyup(function() {
        if ($(this).val().length == 0) {
        $('#message').hide();
        } else {
        $('#message').show();
        }
    }).keyup();
    
    $('#password, #confirm_password').on('keyup', function () {
        if ($('#password').val() == $('#confirm_password').val()) {
        $('#message').css('display', 'none');
        } else 
        $('#message').html('Not Matching').css({'color': 'red', 'display':'block'});
    });
    const alertMessage = useRef(null)
    const updatePassword = (event) => {
        const data = {
            currentPassword: event.target.parentElement.parentElement.querySelector(".popup-box-body").querySelectorAll("input")[0].value,
            newPassword: event.target.parentElement.parentElement.querySelector(".popup-box-body").querySelectorAll("input")[1].value,
            confirmPassword: event.target.parentElement.parentElement.querySelector(".popup-box-body").querySelectorAll("input")[2].value
        }
        $.ajax({
            url : appleAccount.management +'?id='+ id + '&password='+ data.currentPassword + '&newPassword='+data.newPassword + '&confirmPassword='+data.confirmPassword,
            type : 'POST',
            data: JSON.stringify(data),
            dataType: 'json',
            contentType: 'application/json',
            success: function (response) {
                if (response &&response.msg == 'ERRORNESTED'){
                  alertMessage.current.style.display="block";
                  alertMessage.current.innerHTML="Please enter all fields";
                } else if (response && response.msg == 'wrong password'){
                  alertMessage.current.style.display="block";
                  alertMessage.current.innerHTML="Your password is incorrect";
                } else {if (response && response.msg == 'unmatched') {
                  alertMessage.current.style.display="block";
                  alertMessage.current.innerHTML="Please re-confirm password";
                } else if (response && response.msg == 'enter new pw') {
                  alertMessage.current.style.display="block";
                  alertMessage.current.innerHTML="New password must be different from current password";
                } else {
                  alert("Updated successful!"); closeBox(event);
                }}
            },
            error: function(jqXHR, textStatus, errorThrown) {
               console.log(textStatus, errorThrown);
            } 
        })
    }

    //Update name
    //Set input only allow text
    function handleInputChange(event) {
        const inputValuefName = event.target.parentElement.parentElement.querySelector(".popup-box-body").querySelectorAll("input")[0].value.replace(/[^A-Za-z]/g, '');
        const inputValuelName = event.target.parentElement.parentElement.querySelector(".popup-box-body").querySelectorAll("input")[1].value.replace(/[^A-Za-z]/g, '');
        event.target.parentElement.parentElement.querySelector(".popup-box-body").querySelectorAll("input")[0].value = inputValuefName;
        event.target.parentElement.parentElement.querySelector(".popup-box-body").querySelectorAll("input")[1].value = inputValuelName;
    }

    const updateName = (event) => {
        const fName = event.target.parentElement.parentElement.querySelector(".popup-box-body").querySelectorAll("input")[0].value
        const lName = event.target.parentElement.parentElement.querySelector(".popup-box-body").querySelectorAll("input")[1].value
        var options = {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        };
          fetch(appleAccount.management +'/?id=' + id +'&first-name=' + fName + '&last-name=' + lName, options)
            .then(function(response) {
                response.json().then(function(data){
                  localStorage.setItem("user", JSON.stringify(data));
                  })
            })
            .then(function() {alert("Updated successful!"); closeBox(event); window.location.reload();
        });
    }

    const updateBirthDay = (event) => {
        const birthDay = event.target.parentElement.parentElement.querySelector(".popup-box-body").querySelector("input").value
        var options = {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        };
        fetch(appleAccount.management +'/?id=' + id +'&birthday=' + birthDay, options)
            .then(function(response) {
                response.json().then(function(data){
                  localStorage.setItem("user", JSON.stringify(data));
                })
            })
            .then(function() {alert("Updated successful!"); closeBox(event); window.location.reload();
        });
    }

    const updateCountry = (event) => {
        const countrySelected = event.target.parentElement.parentElement.querySelector(".popup-box-body").querySelector("select").querySelector('select option:checked').value
        var options = {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
          };
        fetch(appleAccount.management +'/?id=' + id +'&country=' + countrySelected, options)
            .then(function(response) {
                response.json().then(function(data){
                  localStorage.setItem("user", JSON.stringify(data));
                  })
            })
            .then(function() {alert("Updated successful!"); closeBox(event); window.location.reload()
        });
    }

    //Update phone number
    //Input phone number only
    const [data, setData] = useState([]);

    function handleInputChangeNumber(event) {
        const inputValueNumber = event.target.parentElement.parentElement.querySelector(".popup-box-body").querySelector("input").value.replace(/[^0-9]/g, '');
        event.target.parentElement.parentElement.querySelector(".popup-box-body").querySelectorAll("input")[0].value = inputValueNumber;
    }

    const updateReachable = (event) => {
        const phoneNumber = event.target.parentElement.parentElement.querySelector(".popup-box-body").querySelector("input").value
        var options = {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
          };
          fetch(appleAccount.management +'/?id=' + id +'&phone=' + phoneNumber, options)
            .then(function(response) {
                response.json().then(function(data){
                  localStorage.setItem("user", JSON.stringify(data)); setData(data);
                  })
            })
            .then(function() {alert("Updated successful!"); closeBox(event);
          });
    }

    // Close box after clicking cancel 
    
    const closeBox = (event) => {
        event.target.parentElement.parentElement.style.display='none'
    }

    return (
        <>
            <div className="section-header">
                <div className="section-header-nav">
                    <h2 style={{fontWeight: 'lighter'}}>Apple ID</h2>
                    <div class="header-nav-item">
                        <Link onClick={signOut} style={{color:'#666'}} class="none-address-style" href="">Sign Out</Link>
                    </div>
                </div>
            </div>

            <content>
                <aside id="aside">
                    <div>
                        <div id="aside-user-info">
                            <img id="user-avatar" src={JSON.parse(window.localStorage.getItem('user')).avatar_link==''?'https://www.ounaturg.ee/assets/default-avatar-315a351c4a600465ca4672b2df60cdaa.png':JSON.parse(window.localStorage.getItem('user')).avatar_link} alt="avatar"/>
                            <p className="user-name">{JSON.parse(window.localStorage.getItem('user')).first_name + ' ' + JSON.parse(window.localStorage.getItem('user')).last_name}</p>
                            <p className="user-email">{JSON.parse(window.localStorage.getItem('user')).email}</p>
                        </div>
                        <ul id="aside-nav">
                            <li onClick={(event) => showSignIn(event)} style={{fontWeight:'bolder'}} >Sign-In and Security</li>
                            <li onClick={(event) => showPersonal(event)}>Personal Information</li>
                            <li>Payment Methods</li>
                            <li>Family Sharing</li>
                            <li>Devices</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                </aside>

                <article id="article">
                    <div ref={articleSignIn} className="article-signin">
                        <div className="signin-header">
                            <p>Sign-In and Security</p>
                            <p>Manage settings related to signing in to your account, account security, as well as how to recover your data when you’re having trouble signing in.</p>
                        </div>
                        <div className="signin-body">
                            {signInBody.map(item =>
                                <div key={item.id} onClick={item.onclick} class="body-box">
                                    <div class="box-left">
                                        <p>{item.ptitle}</p>
                                        <p class="user-email">{item.psub}</p>
                                    </div>
                                    <div class="box-right">
                                        <FontAwesomeIcon className="fa-brands fa-apple" icon={item.icon}/>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div ref={articlePersonal} className="article-personal">
                        <div className="personal-header">
                            <p>Personal Information</p>
                            <p>Manage your personal information, including phone numbers and email addresses where you can be reached.</p>
                        </div>
                        <div className="personal-body">
                            {personalBody.map(item =>
                                <div key={item.id} onClick={item.onclick} class="body-box">
                                    <div class="box-left">
                                        <p>{item.ptitle}</p>
                                        <p class={item.classname}>{item.psub}</p>
                                    </div>
                                    <div class="box-right">
                                        <FontAwesomeIcon icon={item.icon}/>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div id="popup">
                        <div ref={popupBoxAppleID} className="popup-box" id="popup-box-appleid">
                            <div className="popup-box-header">
                                <FontAwesomeIcon style={{fontSize:'48px'}} icon={faAppleAlt}/>
                                <p>Apple ID</p>
                                <p className="user-email"></p>
                                <p>Your Apple ID is used to access all Apple products and services</p>
                            </div>
                            <div className="popup-box-body">
                                <label for="appleid">Change your Apple ID</label>
                                <input type="email" name="appleid" placeholder="New Apple ID"/>
                                <p>Enter a new email address to use as your Apple ID. A verification code will be sent to this address.</p>
                            </div>
                            <div className="popup-box-footer">
                                <button onClick={(event)=>closeBox(event)}>Cancel</button>
                                <button onClick={(event)=>updateAppleID(event)}>Change Apple ID</button>
                            </div>
                        </div>

                        <div ref={popupBoxPassword} className="popup-box" id="popup-box-password">
                            <div className="popup-box-header">
                                <FontAwesomeIcon icon={faKey}/>
                                <p>Password</p>
                                <p>Update your new password</p>
                            </div>
                            <div style={{display:'flex'}} className="popup-box-body">
                                <label for="newpassword">Change your password</label>
                                <input type="password" name="current-password" placeholder="Current password"/>
                                <input id="password" type="password" name="new-password" placeholder="New password"/>
                                <input id="confirm_password" type="password" name="confirm-new-password" placeholder="Confirm new password"/>
                                <span ref={alertMessage} style={{fontSize: '14px', position:'absolute', marginTop:'158px', color:'red'}} id='message'></span>
                                <div style={{marginTop:'20px'}}>
                                    <input style={{width:'min-content',height:'min-content', important: true}} type="checkbox" name="sign-out-all" value="checked" defaultChecked/>
                                    <label for="sign-out-all">Sign out of Apple devices and websites associated with your Apple ID. Learn more</label><br></br>
                                </div>
                            </div>
                            <div className="popup-box-footer">
                                <button onClick={(event)=>closeBox(event)}>Cancel</button>
                                <button onClick={(event)=>updatePassword(event)}>Update new password</button>
                            </div>
                        </div>

                        <div ref={popupBoxName} className="popup-box" id="popup-box-name">
                            <div className="popup-box-header">
                                <FontAwesomeIcon icon={faUser}/>
                                <p className="user-name">Name</p>
                            </div>
                            <div className="popup-box-body">
                                <label for="first-name">First name</label>
                                <input id="first-name" onChange={handleInputChange} type="text" pattern="[A-Za-z]+" name="first-name" placeholder=""/>
                                <label for="last-name">Last name</label>
                                <input id="last-name" onChange={handleInputChange} type="text" pattern="[A-Za-z]+" name="last-name" placeholder=""/>
                            </div>
                            <div className="popup-box-footer">
                                <button onClick={(event)=>closeBox(event)}>Cancel</button>
                                <button onClick={(event)=>updateName(event)}>Update</button>
                            </div>
                        </div>

                        <div ref={popupBoxBirthday} className="popup-box" id="popup-box-birthday">
                            <div className="popup-box-header">
                                <FontAwesomeIcon icon={faCalendarDays}/>
                                <p>Birthday</p>
                                <p>Your birth date is required to determine eligible services.</p>
                            </div>
                            <div className="popup-box-body">
                                <label for="first-name">Birthday</label>
                                <input id="datepicker" type="text" name="birthday" placeholder="DD/MM/YYYY"/>
                            </div>
                            <div className="popup-box-footer">
                                <button onClick={(event)=>closeBox(event)}>Cancel</button>
                                <button onClick={(event)=>updateBirthDay(event)}>Update</button>
                            </div>
                        </div>

                        <form id="imageUploadForm" encType="multipart/form-data" method="post">
                            <div ref={popupBoxAvatar} className="popup-box" id="popup-box-avatar">
                                <div className="popup-box-header">
                                    <FontAwesomeIcon icon={faUserTie}/>
                                    <p>Avatar</p>
                                    <p>Upload your personalized photo.</p>
                                </div>
                                <div className="popup-box-body">
                                    <label for="first-name">Avatar</label>
                                    <input type="url" name="url-avatar" placeholder="Insert your avatar link here"/>
                                    <label for="last-name">Or upload your photo</label>
                                    <input id="ImageBrowse upload-avatar" style={{width:'fit-content', height:'min-content', important: true}} type="file" name="upload-avatar" accept="image/png, image/jpeg"/>
                                </div>
                                <div className="popup-box-footer">
                                    <button onClick={(event)=>closeBox(event)} type="button">Cancel</button>
                                    <button type="submit">Update new avatar</button>
                                </div>
                            </div>
                        </form>

                        <div ref={popupBoxCountryRegion} className="popup-box" id="popup-box-country">
                            <div className="popup-box-header">
                                <FontAwesomeIcon icon={faEarthAsia}/>
                                <p>Country / Region</p>
                                <p className="user-country"></p>
                            </div>
                            <div className="popup-box-body">
                                <select name="country" id="country">
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="United State">United State</option>
                                </select>
                            </div>
                            <div className="popup-box-footer">
                                <button onClick={(event)=>closeBox(event)}>Cancel</button>
                                <button onClick={(event)=>updateCountry(event)}>Update</button>
                            </div>
                        </div>

                        <div ref={popupBoxLanguages} className="popup-box" id="popup-box-reachable">
                            <div className="popup-box-header">
                                <FontAwesomeIcon icon={faComment}/>
                                <p>Reachable At</p>
                                <p>Adding contact information helps friends and family reach you using iMessage, FaceTime, Game Center, and more.</p>
                            </div>
                            <div className="popup-box-body">
                                <label for="phone-number">Update your phone number</label>
                                <input onChange={handleInputChangeNumber} id="user-phonenumber" type="tel" name="phone-number" placeholder=""/>
                            </div>
                            <div className="popup-box-footer">
                                <button onClick={(event)=>closeBox(event)}>Cancel</button>
                                <button onClick={(event)=>updateReachable(event)}>Update</button>
                            </div>
                        </div>

                    </div>
                </article>
            </content>

        </>
    )
}

export default UserManagement