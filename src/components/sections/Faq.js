import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'Miks me podcasti tegime?',
    content: () => (
      <>
        Esiteks, sest me tahtsime:)) 
        Teiseks, eesti keeles puuduvad kokkuvõtlikud ja huvitavad(!) välispoliitika podcastid. Uudiste pealkirju USA-s toimuva segaduse kohta oskame kõik meediaväljaannetes lugeda, kuid aru saada, mis tegelikult toimub on märksa keerulisem. See ongi põhjus, miks kuulata meie podcasti.
      </>
    ),
  },
  
  
  
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Korduma kippuvad küsimused</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
