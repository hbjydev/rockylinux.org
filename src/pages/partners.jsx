import React from 'react';
import { Translate } from '../i18n/utils/translate';
import Layout from '../components/layout';
import Seo from '../components/seo';
import PageHeader from '../components/page-header';
import CardStack from '../components/card-stack';
import Card from '../components/card';
import { getGrade, partners } from '../data/supporters';

const buildPartners = () =>
  partners.map((partner, key) => (
    <Card
      title={partner.name}
      description={partner.description}
      href={partner.url}
      pills={[ getGrade(partner.grade) + ' ' + Translate('supporters')('partner') ]}
      logo={partner.logo}
      key={key} />
  ));

const Partners = () => {
  const translate = Translate('partners');

  return (
    <Layout>
      <Seo title={translate('title')} />
      <PageHeader title={translate('title')} description={translate('description')} />
      <main className="px-6 bg-white text-gray-800 dark:text-white z-0">
        <CardStack children={buildPartners(translate)} />
      </main>
    </Layout>
  );
};

export default Partners;
