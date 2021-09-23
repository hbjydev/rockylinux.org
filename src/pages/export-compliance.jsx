import React from 'react';
import { Translate } from '../i18n/utils/translate';
import PageHeader from '../components/page-header';
import Layout from '../components/layout';
import Seo from '../components/seo';

const ExportCompliancePage = () => {
  const translate = Translate('export-compliance');

  return (
    <Layout>
      <Seo title={translate('title')} />
      <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white z-0">
        <PageHeader title={translate('title')} />
        <div style={{ maxWidth: '750px', margin: '0 auto 56px auto', width: '100%' }} className="prose">
          <p>By downloading Rocky Linux software, you acknowledge that you understand all of the following:</p>
          <p>Rocky Linux software and technical information may be subject to the U.S. Export Administration Regulations (the “EAR”) and other U.S. and foreign laws and may not be exported, re-exported or transferred (a) to a prohibited destination country under the EAR or U.S. sanctions regulations (currently Cuba, Iran, North Korea, Sudan, Syria, and the Crimea Region of Ukraine, subject to change as posted by the United States government); (b) to any prohibited destination or to any end user who has been prohibited from participating in U.S. export transactions by any federal agency of the U.S. government; or (c) for use in connection with the design, development or production of nuclear, chemical or biological weapons, or rocket systems, space launch vehicles, or sounding rockets, or unmanned air vehicle systems.</p>
          <p>You may not download Rocky Linux software or technical information if you are located in one of these countries or otherwise subject to these restrictions. You may not provide Rocky Linux software or technical information to individuals or entities located in one of these countries or otherwise subject to these restrictions. You are also responsible for compliance with foreign law requirements applicable to the import, export and use of Rocky Linux software and technical information. Rocky Linux software in source code and binary code form are publicly available and are not subject to the EAR in accordance with §742.15(b).</p>
        </div>
      </main>
    </Layout>
  );
};

export default ExportCompliancePage;
