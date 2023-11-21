import React from 'react'
import './App.css'
import {
  GiGamepad,
  GiGameConsole,
  GiHealthPotion,
  GiRocket,
} from "react-icons/gi";
import CardBackground from './components/card/CardBackground';
import Content from './components/content/Content';
import Materi1 from './components/materi/Materi1';
import Materi2 from './components/materi/Materi2';
import Image from './assets/image.jsx';

const content = [
  {
    title: "SPIDER-MAN 2",
    image: Image.Poster1,
    platform: "Playstation 5",
    release_date: "October 20, 2023",
    genre: "Fighting game, Action-adventure game",
  },
  {
    title: "ELDEN RING",
    image: Image.Poster2,
    platform: "Playstation, Xbox, Microsoft Windows",
    release_date: "February 25, 2022",
    genre: "RPG, Dark Fantasy, Open World",
  },
  {
    title: "It Takes Two",
    image: Image.Poster3,
    platform: "Playstation, Xbox, Microsoft Windows, Nitendo",
    release_date: "March 26, 2021",
    genre: "Co-op, Multiplayer, Split Screen",
  },
  {
    title: "The Legend of Zelda Breath of the Wild",
    image: Image.Poster4,
    platform: "Nitendo Switch, Wii U",
    release_date: "March 3, 2017",
    genre: "Action-adventure game, Puzzle Video Game",
  },
  {
    title: "Super Mario Bros. Wonder",
    image: Image.Poster5,
    platform: "Nitendo Switch",
    release_date: "October 20, 2023",
    genre: "Platform Game",
  },
  {
    title: "Clash of Clans",
    image: Image.Poster6,
    platform: "Android, iOS",
    release_date: "August 2, 2012",
    genre: "Real-time strategy",
  },
];

function App() {
  return (
    <>
      {/* Container Landing Page */}
      <div className="container container-landing">
        <div className="contentLandingPage">
          <h1 className="text-center judul">Atma Jaya Game Center</h1>
          <p className="text">
            Unleash Your Playful Spirit at Atma Jaya Game Center
          </p>
        </div>
        {/* Icon Untuk Hiasan */}
        <GiGamepad className="iconGamePad"/>
        <GiGameConsole className="iconGameConsole"/>
        <GiHealthPotion className='iconHealthPotion' />
        <GiRocket className='iconRocket' />
      </div>
      <div className="container container-content">
        <div>
          <h1 className="judulContent">Content Game</h1>
          <CardBackground>
            <div className="row align-item-center kolom">
              {content.map((item, index) => (
                <Content
                key={index}
                title={item.title}
                image={item.image}
                platform={item.platform}
                release_date={item.release_date}
                genre={item.genre}
                >

                </Content>
              ))}
            </div>
          </CardBackground>
        </div>
      </div>
      <div className="container container-content">
        <h1 className="judulContent">Materi 1</h1>
        <CardBackground>
          <Materi1/>
        </CardBackground>
      </div>
      <div className="container container-content">
        <h1 className="judulContent">Materi 2</h1>
        <CardBackground>
        <Materi2/>
        </CardBackground>
      </div>
    </>
  )
}

export default App
