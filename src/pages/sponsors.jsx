import React from 'react';
import { Translate } from '../i18n/utils/translate';
import Layout from '../components/layout';
import Seo from '../components/seo';
import PageHeader from '../components/page-header';
import Card from '../components/card';
import CardStack from '../components/card-stack';

import { getGrade, sponsors } from '../data/supporters';

const buildSponsors = () =>
  sponsors.map((sponsor, key) => (
    <Card
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
      <Seo title={translate('title')} />
      <PageHeader title={translate('title')} description={translate('description')} />
      <main className="px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-white z-0">
        <CardStack children={buildSponsors()} />
      </main>
    </Layout>
  );
};

export default Sponsors;
