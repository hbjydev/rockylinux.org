import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import PageHeader from '../components/page-header';
import { Translate, Trans } from '../i18n/utils/translate';

const DownloadPage = () => {
  const translate = Translate('download');

  return (
    <Layout>
      <Seo title={translate('title')} />
      <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white z-0">
        <PageHeader title={translate('title')} description={translate('description')} />
        <div className="px-4 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="overflow-x-auto overflow-y-hidden border max-w-screen-md mx-auto" style={{ borderColor: '#e1e1e1' }}>
            <table className="min-w-full divide-y" style={{ borderColor: '#e1e1e1' }}>
              <thead className="bg-white">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-medium"
                  >
                    {translate('table.heading.0')}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-medium"
                  >
                    {translate('table.heading.1')}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-medium"
                  >
                    {translate('table.heading.2')}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="px-6 py-3 whitespace-nowrap">x86_64</td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      onClick="_paq.push(['trackEvent', 'Download', 'Download', 'x86_64 Minimal', 1]);"
                      href="https://download.rockylinux.org/pub/rocky/8/isos/x86_64/Rocky-8.4-x86_64-minimal.iso"
                    >
                      Minimal
                    </a>{' '}
                    |&nbsp;
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      onClick="_paq.push(['trackEvent', 'Download', 'Download', 'x86_64 DVD', 1]);"
                      href="https://download.rockylinux.org/pub/rocky/8/isos/x86_64/Rocky-8.4-x86_64-dvd1.iso"
                    >
                      DVD
                    </a>{' '}
                    |&nbsp;
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      onClick="_paq.push(['trackEvent', 'Download', 'Download', 'x86_64 Boot', 1]);"
                      href="https://download.rockylinux.org/pub/rocky/8/isos/x86_64/Rocky-8.4-x86_64-boot.iso"
                    >
                      Boot
                    </a>{' '}
                    |&nbsp;
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      onClick="_paq.push(['trackEvent', 'Download', 'Download', 'x86_64 Boot', 1]);"
                      href="https://download.rockylinux.org/pub/rocky/8/isos/x86_64/Rocky-8.4-x86_64-dvd1.torrent"
                    >
                      Torrent
                    </a>{' '}
                    |&nbsp;
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      href="https://download.rockylinux.org/pub/rocky/8/isos/x86_64/CHECKSUM"
                    >
                      Checksum
                    </a>
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      href="https://download.rockylinux.org/pub/rocky/8/BaseOS/x86_64/"
                    >
                      BaseOS
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-3 whitespace-nowrap">
                    ARM64 (aarch64)
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      onClick="_paq.push(['trackEvent', 'Download', 'Download', 'aarch64 Minimal', 1]);"
                      href="https://download.rockylinux.org/pub/rocky/8/isos/aarch64/Rocky-8.4-aarch64-minimal.iso"
                    >
                      Minimal
                    </a>{' '}
                    |&nbsp;
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      onClick="_paq.push(['trackEvent', 'Download', 'Download', 'aarch64 DVD', 1]);"
                      href="https://download.rockylinux.org/pub/rocky/8/isos/aarch64/Rocky-8.4-aarch64-dvd1.iso"
                    >
                      DVD
                    </a>{' '}
                    |&nbsp;
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      onClick="_paq.push(['trackEvent', 'Download', 'Download', 'aarch64 Boot', 1]);"
                      href="https://download.rockylinux.org/pub/rocky/8/isos/aarch64/Rocky-8.4-aarch64-boot.iso"
                    >
                      Boot
                    </a>{' '}
                    |&nbsp;
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      onClick="_paq.push(['trackEvent', 'Download', 'Download', 'x86_64 Boot', 1]);"
                      href="https://download.rockylinux.org/pub/rocky/8/isos/aarch64/Rocky-8.4-aarch64-dvd1.torrent"
                    >
                      Torrent
                    </a>{' '}
                    |&nbsp;
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      href="https://download.rockylinux.org/pub/rocky/8/isos/aarch64/CHECKSUM"
                    >
                      Checksum
                    </a>
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      href="https://download.rockylinux.org/pub/rocky/8/BaseOS/aarch64/"
                    >
                      BaseOS
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="max-w-screen-sm mx-auto mt-8 text-center">
            <b>{translate('eol')}:</b> 31st May 2029
          </div>
          <div className="max-w-screen-sm px-8 mx-auto mt-8 flex flex-col">
            <div className="flex flex-col md:flex-row items-center justify-evenly mb-6">
              <a
                className="text-green-600 dark:text-green-500 font-medium"
                href="https://docs.rockylinux.org/"
              >
                {translate('docs')}
              </a>
              <a
                className="text-green-600 dark:text-green-500 font-medium"
                href="https://bugs.rockylinux.org"
              >
                {translate('report')}
              </a>
            </div>
            <p className="text-gray-700 mb-3 text-center">
              <Trans t={translate} i18nKey="invitation">
                <a
                  className="text-green-600 dark:text-green-500 font-medium"
                  href="https://chat.rockylinux.org"
                >be a part of the community as a contributor.</a>
              </Trans>
            </p>
            <p className="text-gray-700 text-center">
              <Trans t={translate} i18nKey="compliance">
                <a
                  className="text-green-600 dark:text-green-500 font-medium"
                  href="/export-compliance"
                >export compliance and customs information.</a>
              </Trans>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default DownloadPage;
