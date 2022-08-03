import React from 'react';

const Header = () => {

    return (
        <div className="header" >
            <br></br>
            <h1 id="headertext">
                MOTD Bot control
            </h1>
            <br></br>
            <p id="welcometext">This is MOTD Bot Control. The bot works in 2 parts, website for managing the messages of the day, and the Discord bot that posts the Message of the day.</p> 
            <a href="https://discord.gg/dHyzfUFR3e" target="_blank"><b>Link to Discord server</b></a>
            <p id="welcometext">Type !help in server</p>
            <p id="welcometext">The usage of bot is that you set the time you want the bot post the message of the day. Further instructions are in bot's !help message.</p>

        </div>
    )
}

export default Header