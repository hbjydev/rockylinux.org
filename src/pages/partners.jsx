import React from 'react';
import { Translate } from '../i18n/utils/translate';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import Footer from '../components/footer';

import CIQLogo from '../images/ciq-alt.png';
import FossHostLogo from '../images/fosshost.png';
import MattermostLogo from '../images/mattermost.png';
import NaverLogo from '../images/naver.png';
import FastlyLogo from '../images/fastly.png';
import ArmLogo from '../images/arm.png';
import DotSlashStudioLogo from '../images/dotslash.png';
import OSLLogo from '../images/osl.png';
import PageHeader from '../components/page-header';
import SponsorGrid from '../components/sponsor-grid';
import SponsorBlock from '../components/sponsor-block';

const partnerLogos = [
  CIQLogo, NaverLogo, MattermostLogo, FossHostLogo,
  ArmLogo, FastlyLogo, OSLLogo
];

const partnerLinks = [
  'https://ctrliq.com', 'https://ncloud.com', 'https://mattermost.com',
  'https://fosshost.org', 'https://arm.com', 'https://fastly.com',
  'https://osuosl.org'
];

const buildPartners = (tl, count) => {
  const elements = [];

  for (let i = 0; i < count; i++) {
    elements.push(
      <SponsorBlock
        href={partnerLinks[i]}
        logo={partnerLogos[i]}
        title={tl(`partners.${i}.name`)}
        pills={[ tl(`partners.${i}.grade`) ]}
        description={tl(`partners.${i}.description`)} />
    );
  }

  return elements;
};

const Partners = ({ data, pageContext: { locale: language } }) => {
  const translate = Translate('partners');

  return (
    <Layout>
      <SEO title={translate('title')} />
      <main className="bg-white text-gray-800 dark:text-white z-0">
        <PageHeader title={translate('title')} description={translate('description')} />
        <SponsorGrid children={buildPartners(translate, 7)} />
      </main>
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default Partners;
