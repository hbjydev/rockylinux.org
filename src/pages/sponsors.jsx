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

const Sponsors = ({ data, pageContext: { locale: language } }) => {
  const translate = Translate('sponsors');

  return (
    <Layout>
      <SEO title={translate('title')} />
      <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white z-0">
        <div className="mt-16 px-6" style={{ marginBottom: '56px', borderBottom: '1px solid #e1e1e1' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', paddingBottom: '24px' }}>
            <h2>{translate('title')}</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ padding: '0 24px 56px 24px', maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
          <SponsorBlock
            logo={CIQLogo}
            title={translate('sponsors.0.name')}
            pills={[ translate('sponsors.0.grade'), 'Support Partner' ]}
            description={translate('sponsors.0.description')} />

          <SponsorBlock
            href="https://www.45drives.com/"
            logo={FortyFiveDrivesLogo}
            title={translate('sponsors.1.name')}
            pills={[ translate('sponsors.1.grade') ]}
            description={translate('sponsors.1.description')} />

          <SponsorBlock
            href="https://www.opendrive.com"
            logo={OpenDrivesLogo}
            title={translate('sponsors.2.name')}
            pills={[ translate('sponsors.2.grade') ]}
            description={translate('sponsors.2.description')} />

          <SponsorBlock
            href="https://mvista.com"
            logo={MontaVistaLogo}
            title={translate('sponsors.3.name')}
            pills={[ translate('sponsors.3.grade') ]}
            description={translate('sponsors.3.description')} />

          <SponsorBlock
            href="https://aws.amazon.com"
            logo={AwsLogo}
            title={translate('sponsors.4.name')}
            pills={[ translate('sponsors.4.grade') ]}
            description={translate('sponsors.4.description')} />

          <SponsorBlock
            href="https://cloud.google.com"
            logo={GoogleCloudLogo}
            title={translate('sponsors.5.name')}
            pills={[ translate('sponsors.5.grade') ]}
            description={translate('sponsors.5.description')} />

          <SponsorBlock
            href="https://azure.microsoft.com"
            logo={MicrosoftAzureLogo}
            title={translate('sponsors.6.name')}
            pills={[ translate('sponsors.6.grade') ]}
            description={translate('sponsors.6.description')} />

          <SponsorBlock
            href="https://www.seagategov.com"
            logo={SeagateFederalLogo}
            title="Seagate Federal"
            pills={[ "Sponsor" ]} />
        </div>
      </main>
    </Layout>
  );
};

export default Sponsors;
