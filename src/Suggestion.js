import React, { Component } from 'react';
import instagram from './instagram.png';
import youtube from './youtube.png';
import google from './google.png';
import UI from './UI.png';
import tirto from './tirto.png';
import gmail from './gmail.png';
import './App.css';

export class Suggestion extends Component{
  render () {
    const instagramLink = 'https://www.instagram.com/'
    const googleLink = 'https://www.google.com/'
    const youtubeLink = 'https://www.youtube.com/'
    const sceleLink = 'https://scele.cs.ui.ac.id/'
    const tirtoIdLink = 'https://tirto.id/'
    const mailLink = 'https://mail.google.com/mail/u/0/#inbox'

    return (
        <div className="suggestion">
          <div className="cell cell-1">
            <img src={instagram} className="instagram-logo" alt="logo" />
            <a href={instagramLink} className="word"> See your friends on Instagram?</a>
          </div>
          <div className="cell cell-2">
            <img src={google} className="google-logo" alt="logo" />
            <a type="button" href={googleLink} className="word"> Search something you like? </a>
          </div>
          <div className="cell cell-3">
            <img src={youtube} className="youtube-logo" alt="logo" />
            <a href={youtubeLink} className="word"> Watch some videos?</a>
          </div>
          <div className="cell cell-4">
            <img src={UI} className="UI-logo" alt="logo" />
            <a href={sceleLink} className="word"> Have you seen your academic?</a>
          </div>
          <div className="cell cell-5">
            <img src={tirto} className="tirto-logo" alt="logo" />
            <a href={tirtoIdLink} className="word"> Have you seen some news?</a>
          </div>
          <div className="cell cell-6">
            <img src={gmail} className="gmail-logo" alt="logo" />
            <a href={mailLink} className="word">Have you checked your email?</a>
          </div>
        </div>
    )
  }
}