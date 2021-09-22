import React from 'react';
import { Translate } from '../i18n/utils/translate';

import Layout from '../components/layout';
import SEO from '../components/seo';

import CIQLogo from '../images/ciq-alt.png';
import FortyFiveDrivesLogo from '../images/45drives.jpg';
import AwsLogo from '../images/aws-alt.png';
import GoogleCloudLogo from '../images/google-cloud-alt.png';
import MicrosoftAzureLogo from '../images/azure-alt.png';
import MontaVistaLogo from '../images/montavista.png';
import OpenDrivesLogo from '../images/opendrives.png';
import SeagateFederalLogo from '../images/seagate-federal.png';
import SponsorBlock from '../components/sponsor-block';
import PageHeader from '../components/page-header';
import SponsorGrid from '../components/sponsor-grid';

const sponsorLogos = [
  CIQLogo, FortyFiveDrivesLogo, OpenDrivesLogo, MontaVistaLogo,
  AwsLogo, GoogleCloudLogo, MicrosoftAzureLogo, SeagateFederalLogo
];

const sponsorLinks = [
  'https://ctrliq.com', 'https://45drives.com', 'https://opendrives.com',
  'https://mvista.com', 'https://aws.amazon.com', 'https://cloud.google.com',
  'https://azure.microsoft.com', 'https://seagategov.com'
];

const buildSponsors = (tl, count) => {
  const elements = [];

  for (let i = 0; i < count; i++) {
    elements.push(
      <SponsorBlock
        href={sponsorLinks[i]}
        logo={sponsorLogos[i]}
        title={tl(`sponsors.${i}.name`)}
        pills={[ tl(`sponsors.${i}.grade`) ]}
        description={tl(`sponsors.${i}.description`)} />
    );
  }

  return elements;
};

const Sponsors = ({ data, pageContext: { locale: language } }) => {
  const translate = Translate('sponsors');

  return (
    <Layout>
      <SEO title={translate('title')} />
      <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white z-0">
        <PageHeader title={translate('title')} description={translate('description')} />
        <SponsorGrid children={buildSponsors(translate, 8)} />
      </main>
    </Layout>
  );
};

export default Sponsors;
