import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import '../assets/css/user-management.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt, faKey, faUserShield, faUser, faUserGroup, faPersonWalkingDashedLineArrowRight, faCalendarDays, faUserTie, faEarthAsia, faComment, } from '@fortawesome/free-solid-svg-icons'

const UserManagement = () => {
    
    // Delete user from localStorage when clicking signOut
    const signOut = () => {
        window.localStorage.removeItem('user')
        window.location.href="/"
    }



    const signInBody = [
        {id: 1, ptitle: 'Apple ID', psub: '', onclick: '', icon: faAppleAlt},
        {id: 2, ptitle: 'Password', psub: 'Secure your account', onclick: '', icon: faKey},
        {id: 3, ptitle: 'Account Security', psub: 'Two-facter authentication', onclick: '', icon: faUserShield},
        {id: 4, ptitle: 'Account Recovery', psub: 'Not set up', onclick: '', icon: faUser},
        {id: 5, ptitle: 'Legacy Contact', psub: 'Not set up', onclick: '', icon: faUserGroup},
        {id: 6, ptitle: 'Sign in with Apple', psub: '7 apps and websites', onclick: '', icon: faPersonWalkingDashedLineArrowRight},
        {id: 8, ptitle: 'App-Specific Passwords', psub: 'View details', onclick: '', icon: faKey}
    ]
    const userDb = JSON.parse(window.localStorage.getItem('user'))
    const personalBody = [
        {id: 1, ptitle: 'Name', psub: userDb.first_name + userDb.last_name, onclick: '', classname:'user-name', icon: faUser},
        {id: 2, ptitle: 'Birthday', psub: userDb.birthday, onclick: '', classname:'user-birthday', icon: faCalendarDays},
        {id: 3, ptitle: 'Avatar', psub: 'Uploaded', onclick: '', classname:'', icon: faUserTie},
        {id: 4, ptitle: 'Country / Region', psub: userDb.country, classname:'user-country', onclick: '', icon: faEarthAsia},
        {id: 5, ptitle: 'Languages', psub: userDb.country, onclick: '', classname:'user-country', icon: faComment},
        {id: 6, ptitle: 'Reachable at', psub: userDb.phone, onclick: '', classname:'user-phone', icon: faComment},
    ]

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
                            <li onClick={showSignIn} style={{fontWeight:'bolder'}} >Sign-In and Security</li>
                            <li>Personal Information</li>
                            <li>Payment Methods</li>
                            <li>Family Sharing</li>
                            <li>Devices</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                </aside>

                <article id="article">
                    <div className="article-signin">
                        <div className="signin-header">
                            <p>Sign-In and Security</p>
                            <p>Manage settings related to signing in to your account, account security, as well as how to recover your data when you’re having trouble signing in.</p>
                        </div>
                        <div className="signin-body">
                            {signInBody.map(item =>
                                <div key={item.id} onclick={item.onclick} class="body-box">
                                    <div class="box-left">
                                        <p>{item.ptitle}</p>
                                        <p class="user-email">{item.psub}</p>
                                    </div>
                                    <div class="box-right">
                                        <FontAwesomeIcon className="fa-brands fa-apple" icon={item.icon}/>
                                        {/* <i style="font-size:34px" ></i> */}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="article-personal">
                        <div className="personal-header">
                            <p>Personal Information</p>
                            <p>Manage your personal information, including phone numbers and email addresses where you can be reached.</p>
                        </div>
                        <div className="personal-body">
                            {personalBody.map(item =>
                                <div onclick="popupReachable()" class="body-box">
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
                </article>
            </content>

        </>
    )
}

export default UserManagement