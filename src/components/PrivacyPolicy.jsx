import React from 'react';
import './PrivacyPolicy.css';
import video from './video/GoogleVideo.mp4';
export default function PrivacyPolicy() {
    return (
        <div>

            <div classNameName='container'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        {/* <a className="navbar-brand" href="#">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKQHfO2xUa96QHt_Vz5byawENqSdubtwFmw&s" alt="" width="150px" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}

                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Overview</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Privacy Policy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Terms of Service</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Technologies</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div>
                <img src="https://www.gstatic.com/identity/boq/policies/privacy/privacy_illustration.svg" alt="" className='img1' />

                <h6 className='header'>GOOGLE PRIVACY POLICY</h6>

                <h5 className='para'>When you use our services, youre trusting us with your information. We understand that this is a big responsibility and we work hard to protect your information and put you in control.</h5>

                <p className='para1'>This Privacy Policy is meant to help you understand what information we collect, why we collect it and how you can update, manage, export and delete your information.</p>

                <br />

                <img src="https://www.gstatic.com/identity/boq/policies/privacy/privacy_checkup_icon.svg" alt="" className='img2' />

                <p className='text'>Privacy Check-up</p>
                <p className="text1">Looking to change your privacy setting?</p>
                <a href="#" className="text2">Take the Privacy Check-Up</a>
            </div>
            <hr className='hr1' />

            <p className='text3'>Effective 28 March 2024 | <a href="#" className='text4'>Archived versions</a> | <a href="#" className='text4'>Download PDF</a></p>
            
            <br /><br />
            <hr className='hr2' />

            <br />

            <div>
                <video src={video} muted autoplay loop controls preload='auto' poster='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQGVicR2kwCQJIoQeyX9MnhFrM7Mvy0p1D1xPEX353QmhFYNWaS' className='video'></video>
                <p className='text5'>We build a range of services that help millions of people daily to explore and interact with the world in new ways. Our services include:</p>

                <li className='li'>Google apps, sites and devices, such as Search, YouTube and Google Home</li>
                <li className='li1'>Platforms such as the Chrome browser and Android operating system</li>
                <li className='li2'>Products that are integrated into third-party apps and sites, like ads, analytics and embedded Google Maps</li>
                
                <p className='para2'>You can use our services in a variety of ways to manage your privacy. For example, you can sign up for a Google Account if you want to create and manage content such as emails and photos, or to see more relevant search results. And you can use many Google services when youre signed out or without creating an account at all; for example, searching on Google or watching YouTube videos. You can also choose to browse the web in a private mode, like Chrome Incognito mode, which helps keep your browsing private from other people who use your device. And across our services, you can adjust your privacy settings to control whether we collect some types of data and how we use it.</p>

                <p className='para3'>To help explain things as clearly as possible, we’ve added examples, explanatory videos and definitions for key terms. And if you have any questions about this Privacy Policy, you can contact us.</p>
            </div>
            <br />
            <hr className='hr2' />

            <br />

            <div>
                <h3 className='text6'>Things that you create or provide to us</h3>

                <img src="https://www.gstatic.com/policies/privacy/d1b68e2cd423aba52d74f02573df2d2d.svg" alt="" className='img3' />

                <p className='para4'>When you create a Google Account, you provide us with personal information that includes your name and a password. You can also choose to add a phone number or payment information to your account. Even if you aren't signed in to a Google Account, you might choose to provide us with information — like an email address to communicate with Google or receive updates about our services.</p>

                <p className="para5">We also collect the content that you create, upload or receive from others when using our services. This includes things such as email you write and receive, photos and videos that you save, docs and spreadsheets you create and comments that you make on YouTube videos.</p>

                <br /><br />
                <h5 className='text7'>Information that we collect as you use our services</h5>

                <p className='text8'>Your apps, browsers & devices</p>

                <img src="https://www.gstatic.com/policies/privacy/e79ea0ed464fc8952d5b5582f9f9ae53.svg" alt="" className='img4'/>

                <p className="para6">We collect information about the apps, browsers and devices that you use to access Google services, which helps us provide features such as automatic product updates and dimming your screen if your battery runs low.</p>

                <p className='para7'>The information that we collect includes unique identifiers, browser type and settings, device type and settings, operating system, mobile network information including operator name and phone number and application version number. We also collect information about the interaction of your apps, browsers and devices with our services, including IP address, crash reports, system activity, and the date, time and referrer URL of your request.</p>

                <p className="para8">We collect this information when a Google service on your device contacts our servers - for example, when you install an app from the Play Store or when a service checks for automatic updates. If you’re using an Android device with Google apps, your device periodically contacts Google servers to provide information about your device and connection to our services. This information includes things like your device type and operator name, crash reports, which apps you've installed and, depending on your device settings, other information about how you're using your Android device.</p>
            </div>
            <br />
            <hr className='hr2' />
            <br />
            <div>
                <h3 className='text9'>Protect Google, our users and the public</h3>

                <img src="https://www.gstatic.com/policies/privacy/02f8664b95445de6f27ba682f3c5f9ab.svg" alt="" className='img5' />

                <p className='para9'>We use information to help improve the safety and reliability of our services. This includes detecting, preventing and responding to fraud, abuse, security risks and technical issues that could harm Google, our users or the public.</p>
            </div>
            <br />

            <hr className='hr2' />

            <br />

            <div>
                <h6 className='text10'>With domain administrators</h6>

                <p className="para10">If you're a student, or work for an organisation that uses Google services, your domain administrator and resellers who manage your account will have access to your Google Account. They may be able to:</p>

                <li className='li2'>Access and retain information stored in your account, such as your email</li>
                <li className='li2'>View statistics regarding your account, such as how many apps you install</li>
                <li className='li2'>Change your account password</li>
                <li className='li2'>Suspend or terminate your account access</li>
                <li className='li3'>Receive your account information in order to satisfy applicable law, regulation, legal process or enforceable &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;governmental request</li>
                <li className='li2'>Restrict your ability to delete or edit your information or your privacy settings</li>
            </div>
            <br />
            <hr className='hr2' />

            <div>
                <h5 className='text11'>Specific Google services</h5>
                <p className="text12">The following privacy notices provide additional information about some Google services:</p>

                <li className='li4'><a href="#" className='text13'>Payments</a></li>
                <li className='li4'><a href="#" className='text13'>Fiber</a></li>
                <li className='li4'><a href="#" className='text13'>Google Fi</a></li>
                <li className='li4'><a href="#" className='text13'>Google Workspace for Education</a></li>
                <li className='li4'><a href="#" className='text13'>Read Along</a></li>
                <li className='li4'><a href="#" className='text13'>YouTube Kids</a></li>
                <li className='li4'><a href="#" className='text13'>Google Accounts Managed with Family Link, for Children under 13 (or applicable age in your country)</a></li>
                <li className='li4'><a href="#" className='text13'>Family Link privacy guide for children and teens</a></li>
                <li className='li4'><a href="#" className='text13'>Voice and audio collection from children's features on the Google Assistant</a></li>

                <br />
                <p className='para11'>If you're a member of an organisation that uses Google Workspace or Google Cloud Platform, learn how these services collect and use your personal information in the Google Cloud Privacy Notice.</p>
            </div>

            <div className='main-div'>
                <a href='https://www.google.com/' className='p1'>Google</a>
                <a href='https://about.google/' className='li5'>About Google</a>
                <a href='#' className='li6'>Privacy</a>
                <a href='https://policies.google.com/terms?hl' className='li7'>Terms</a>
                <a href='https://transparency.google/?hl=en_GB' className='li8'>Transparency Center</a>
            </div>
        </div>
    )
}
