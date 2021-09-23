import React from 'react';
import { Translate } from '../i18n/utils/translate';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/page-header';
import SponsorGrid from '../components/sponsor-grid';
import SponsorBlock from '../components/sponsor-block';
import { getGrade, partners } from '../data/supporters';

const buildPartners = () =>
  partners.map((partner, key) => (
    <SponsorBlock
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
      <SEO title={translate('title')} />
      <main className="bg-white text-gray-800 dark:text-white z-0">
        <PageHeader title={translate('title')} description={translate('description')} />
        <SponsorGrid children={buildPartners(translate)} />
      </main>
    </Layout>
  );
};

export default Partners;
