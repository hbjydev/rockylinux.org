import React from 'react';
import { Translate } from '../i18n/utils/translate';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SponsorBlock from '../components/sponsor-block';
import PageHeader from '../components/page-header';
import SponsorGrid from '../components/sponsor-grid';

import { getGrade, sponsors } from '../data/supporters';

const buildSponsors = () =>
  sponsors.map((sponsor, key) => (
    <SponsorBlock
      title={sponsor.name}
      description={sponsor.description}
      href={sponsor.url}
      pills={[ getGrade(sponsor.grade) + ' ' + Translate('supporters')('sponsor') ]}
      logo={sponsor.logo}
      key={key} />
  ));

const Sponsors = () => {
  const translate = Translate('sponsors');

  return (
    <Layout>
      <SEO title={translate('title')} />
      <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white z-0">
        <PageHeader title={translate('title')} description={translate('description')} />
        <SponsorGrid children={buildSponsors()} />
      </main>
    </Layout>
  );
};

export default Sponsors;
