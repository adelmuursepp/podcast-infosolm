import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'Miks me podcasti tegime?',
    content: () => (
      <>
        Mõte
Esiteks, sest me tahtsime:))) – oleme välispoliitika ja filosoofia fanaatikud ning päris tihti leidsime end debattimas erinevate teemade üle. Vaatenurki on ju tohutult palju, nagu ümberringi maailmas näeme, siis kõike on võimalik mingil moel põhjendada, aga meie kui info vastuvõtjad, saame otsustada kriitilise mõtlemise abil, mis on moraalne ja mis mitte. Selle podcasti mõte ongi kutsuda aktiivselt lahti mõtestama maailmas toimuvat ja ka lihtsalt ülevaadet saama. 

Vajadus
Teiseks, eesti keeles on vaid mõni üksik kokkuvõtlik välispoliitika podcast, seega suurendame valikuid ja lisame juurde oma ekstsentrilisust, mis annab juurde ka kõige tüütumale teemale särtsu. Meie muudame välispoliitika ka huvitavaks(!) (okei, vähemalt üritame). Uudiste pealkirju maailmas toimuva segaduse kohta oskame kõik meediaväljaannetes lugeda, kuid aru saada, mis tegelikult toimub on märksa keerulisem. See ongi põhjus, miks kuulata meie podcasti. 

Väljund
Podcast on üks hea väljund “multitaskeritele”, kes tahavad imada endasse võimalikult palju infot ilma, et peaksid korraks maha istuma ja sellele üdini keskenduma, vaid saavad jätkata oma igapäeva rutiini ja põhitegevustega. Hoiab aega kokku, mis annab võimaluse tekitada endas huvi teemades, millele aega pühendada eraldi pole võimalik - avastada midagi uut! Loomulikult ei saa mainimata jätta ka kordi, kus on lihtsalt tore visata pikali ja kuulata mõnda head podcasti. Ehk põhjuseid jagub, kui neid vaid leida.
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
