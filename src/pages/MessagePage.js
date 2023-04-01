import { render } from "@testing-library/react";
import React from "react";
import '../style/chat.css';

class Chat extends React.Component{
    render(){
        return(
            <div> 
                
                <div class="wrapper">

                <div class="content">

                    <div class="sidebar">

                        <div class="search-form-container">
                            <form class="search-form" action="" method="">
                                <span class="magnifier">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M228 68.7c-68.5 0-124 55.5-124 124 0 68.5 55.5 124 124 124 68.5 0 124-55.5 124-124C352 124.2 296.5 68.7 228 68.7zM228 283.3c-50 0-90.6-40.6-90.6-90.6 0-50 40.6-90.6 90.6-90.6s90.6 40.6 90.6 90.6C318.6 242.7 278 283.3 228 283.3z" class="a"/><path d="M392.8 414.3c6.1 9.2 4.1 21.3-4.4 26.9 -8.5 5.7-20.5 2.8-26.6-6.4l-88.6-133.2c-6.1-9.2-4.1-21.3 4.4-26.9 8.5-5.7 20.5-2.8 26.6 6.4L392.8 414.3z" class="a"/></svg>
                                </span>

                                <label for="search">Search</label>
                                <input id="search" name="search" type="text" placeholder="Search" />
                            </form>
                        </div>

                        <div class="contacts">

                            <nav  class="contacts-nav">
                                <ul>
                                    <li class="active"><a href="">Contacts</a></li>
                                    <li></li>
                                    
                                </ul>
                            </nav>

                            <ul class="contact-list">

                                <li class="person">
                                    
                                    <span class="info">
                                        <span class="name">Sacha Griffin</span>
                                        <span class="status-msg"></span>
                                        
                                    </span>
                                </li>

                                <li class="person active">
                                    
                                    <span class="info">
                                        <span class="name">Debby Jones</span>
                                        <span class="status-msg"></span>
                                        <span class="last-login"></span>
                                    </span>
                                </li>

                                <li class="person">
                                    
                                    <span class="info">
                                        <span class="name">Sarah White</span>
                                        <span class="status-msg"></span>
                                        <span class="last-login"></span>
                                    </span>
                                </li>

                            

                            </ul>

                        </div>

                    </div>

                    <div class="chatbox">

                        <div class="person">
                            <span class="avatar">
                                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="Debby Jones" />
                                
                            </span>
                            <span class="info">
                                <span class="name">Debby Jones</span>
                                <span class="login-status">Online | 11:00 | Bursa,Türkiye</span>
                                            
                            </span>
                        </div>

                        <div class="chatbox-messages">
                            <div class="messages clear">
                                <span class="avatar">
                                    <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="Debby Jones" />
                                </span>
                                <div class="sender">
                                    <div class="message-container">
                                        <div class="message">
                                            <p>Cras ut ante consequat, luctus massa vel, sodales orci.</p>
                                            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                        </div>
                                        <span class="delivered">10:27 </span>
                                    </div>


                                </div>
                            </div>

                            <div class="messages clear">
                                <div class="user">
                                    <div class="message-container">
                                        <div class="message">
                                            <p>Suspendisse imperdiet nunc ac pellentes Integer mollis nisi nec nisl
                                                fauciubs. Curabitur bibendum ullamcorper lorem, in bibendum dui
                                                euismod gravida.</p>
                                        </div>
                                        <span class="delivered">10:29 </span>
                                    </div>

                                </div>
                            </div>

                            <div class="messages clear">
                                <span class="avatar">
                                    <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="Debby Jones" />
                                </span>
                                <div class="sender">
                                    <div class="message-container">
                                        <div class="message">
                                            <p>Aliquam maximus lacinia nisl nec as. Donec rhoncus efficitur augue, vitae</p>
                                            <p>Curabitur euismod at ultrices.</p>
                                        </div>
                                        <span class="delivered">10:27
                        </span>
                                    </div>

                                </div>
                            </div>

                        </div>


                        <div class="message-form-container">
                            
                            <form class="message-form" action="" method="">
                                <textarea id="message" name="message" placeholder="Type a message here..."></textarea>
                                <button class="send-btn" type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.2 30.1"><path class="st0" d="M2.1 14.6C8.9 12 28.5 4 28.5 4l-3.9 22.6c-0.2 1.1-1.5 1.5-2.3 0.8l-6.1-5.1 -4.3 4 0.7-6.7 13-12.3 -16 10 1 5.7 -3.3-5.3 -5-1.6C1.5 15.8 1.4 14.8 2.1 14.6z"/></svg>
                                </button>
                            </form>


                        </div>

                    </div>

                </div>

	            </div>

            </div>
        )   
    }
}

export default Chat;