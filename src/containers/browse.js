import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import { Card, Header, Loading, Player } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.png';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';
import scriptsData from '../fixtures/scripts';


export function BrowseContainer({ slides }) {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  return (
    <>
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="DracarysMods" />
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Start Dominating Now</Header.FeatureCallOut>
          <Header.Text>
            We provide the best most updated scripts that will help you become the best you can be,
            Purchase the script you want below and join our discord community to claim it now! 
          </Header.Text>
          <Header.PlayButton href="https://discord.gg/MYEdsa8YJ4" target="_blank">Join Discord</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {scriptsData.map((item) => (
          <Card>
            <Card.Title>{item.title}</Card.Title>
            <Card.Entities>
                <Card.Item key={item.id} item={item}>
                  <Card.Image src={`/images/gamecovers/${item.slug}/small.png`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
            </Card.Entities>
            <Card.Feature>
              <Player>
                <Player.Button />
                <Player.Video src={`/videos/${item.slug}/cronusad.mp4`} />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  );
}
