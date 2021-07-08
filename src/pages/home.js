import React from 'react';
import * as ROUTES from '../constants/routes';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unpachable Scripts for all multiplayer games.</Feature.Title>
          <Feature.SubTitle>Get your script, and start dominating now.</Feature.SubTitle>
          <OptForm>
            <OptForm.Button to={ROUTES.BROWSE}>Browse Scripts Now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Our scripts work for CronusMax, CronusZen, and Titan Devices.</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
