import { graphql } from 'gatsby';
import React from 'react';
import { Translate } from '../i18n/utils/translate';
import Layout from '../components/layout';
import Seo from '../components/seo';
import CIQLogo from '../images/ciq.png';
import FortyFiveDrivesLogo from '../images/45drives-transparent.png';
import AwsLogo from '../images/aws.png';
import GoogleCloudLogo from '../images/google-cloud.png';
import MicrosoftAzureLogo from '../images/microsoft-azure.png';
import MontaVistaLogo from '../images/montavista-alt.png';
import OpenDrivesLogo from '../images/opendrives-transparent.png';
import ArmLogo from '../images/arm.png';
import FastlyLogo from '../images/fastly.png';
import FossHostLogo from '../images/fosshost.png';
import MattermostLogo from '../images/mattermost.png';
import NaverLogo from '../images/naver.png';
import OSLLogo from '../images/osl.png';
import HeroImage from '../images/landing/landing-hero.jpg';
import { Button, Hero } from '@resf/pebble';
import { DownloadIcon, ChatAlt2Icon, ArrowRightIcon } from '@heroicons/react/outline';
import LandingSegment from '../components/LandingSegment';

const Index = () => {
  const translate = Translate('index');

  const ctas = [
    {
      preIcon: (<DownloadIcon />),
      children: translate('links.download'),
      link: '/download',
      primary: true,
      postText: '8.4',
      large: true,
    },
    {
      preIcon: <ChatAlt2Icon />,
      children: translate('links.mattermost'),
      link: 'https://chat.rockylinux.org',
      large: true
    }
  ];

  return (
    <Layout>
      <Seo />
      <Hero
        id="rl_hero"
        headline={translate('landing.hero.headline')}
        subheader={translate('landing.hero.subheader')}
        ctas={ctas}
        illustration={<img id="hero_img" src={HeroImage} alt="Hero" />} />
      <div style={{ padding: '0 32px', textAlign: 'center', height: '370px', background: '#FFF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '20px', maxWidth: '740px' }}>A drop-in replacement for your workloads.</h1>
        <p style={{ lineHeight: '1.3', marginBottom: '24px', fontSize: '20px', fontWeight: 'normal', color: '#5F5F5F', maxWidth: '690px' }}>
          Rocky Linux aims to be 100% bug-for-bug compatible with the widely-trusted and highly stable RHEL®, so you can be confident in your servers.
        </p>
        <a href="/" style={{ fontSize: '16px', fontWeight: 'bold', display: 'inline-flex', color: '#10B981' }}>
          Learn more
          <ArrowRightIcon style={{ marginLeft: '4px', height: '16px', marginTop: '3px' }} />
        </a>
      </div>
      <div>
        <LandingSegment left={(
          <>
            <h4 className="font-bold" style={{ marginBottom: '16px' }}>Stability Guaranteed.</h4>
            <p style={{ maxWidth: '460px', fontSize: '18px', color: '#3E3E3E' }}>Rocky Linux is built from tested, stable versions of software, with regular updates being released to keep you on top of things.</p>
          </>
        )} />

        <LandingSegment right={(
          <>
            <h4 className="font-bold" style={{ marginBottom: '16px' }}>Massive support windows.</h4>
            <p style={{ maxWidth: '460px', fontSize: '18px', color: '#3E3E3E' }}>Being built from the same sources as RHEL means we can follow the same software support window for our releases, so you can expect Rocky Linux 8 support until 2029.</p>
          </>
        )} />

        <LandingSegment left={(
          <>
            <h4 className="font-bold" style={{ marginBottom: '16px' }}>It's easy to switch.</h4>
            <p style={{ maxWidth: '460px', fontSize: '18px', color: '#3E3E3E' }}>The Rocky Linux community maintains a set of scripts and utilities to make converting an existing Enterprise Linux 8* distribution to Rocky Linux 8.</p>
          </>
        )} />

        <div style={{ margin: '0 auto 86px auto', textAlign: 'center', color: '#5F5F5F' }}>
          <p>* <a href="https://github.com/rocky-linux/rocky-tools/tree/main/migrate2rocky">migrate2rocky</a> tested on RHEL 8, CentOS 8, Scientific Linux 8 and AlmaLinux 8.</p>
        </div>
      </div>
      <div
        className="relative bg-white overflow-hidden"
        dir="auto"
      >
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-4 lg:py-4" style={{ padding: '56px 0' }}>
          <div className="max-w-xl mb-6 md:mx-auto text-center lg:max-w-2xl md:mb-6">
            <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              {translate('translation:links.backed')}
            </h2>
          </div>
          <div className="bg-white hover:shadow-lg max-w-screen-md mx-auto transform hover:-translate-y-1 transiton duration-300 mb-6 border" style={{ borderColor: '#e1e1e1' }}>
            <div className="max-w-screen-md mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a href="https://ctrliq.com/" aria-label="CIQ">
                    <img
                      src={CIQLogo}
                      className="h-16 grayscale transition duration-200"
                      alt="CIQ"
                    />
                  </a>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a href="https://www.45drives.com/" aria-label="45Drives">
                    <img
                      src={FortyFiveDrivesLogo}
                      className="h-16 grayscale transition duration-200"
                      alt="45Drives"
                    />
                  </a>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a href="https://arm.com/" aria-label="ARM">
                    <img
                      src={ArmLogo}
                      className="h-16 grayscale transition duration-200"
                      alt="ARM"
                    />
                  </a>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a href="https://aws.amazon.com/" aria-label="AWS">
                    <img
                      src={AwsLogo}
                      className="h-16 grayscale transition duration-200"
                      alt="AWS"
                    />
                  </a>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a href="https://www.fastly.com/" aria-label="Fastly">
                    <img
                      src={FastlyLogo}
                      className="h-16 grayscale transition duration-200"
                      alt="Fastly"
                    />
                  </a>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a href="https://fosshost.org/" aria-label="FOSSHOST">
                    <img
                      src={FossHostLogo}
                      className="h-16 grayscale transition duration-200"
                      alt="FOSSHOST"
                    />
                  </a>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 items-center">
                  <a href="https://cloud.google.com/" aria-label="GoogleCloud">
                    <img
                      src={GoogleCloudLogo}
                      className="grayscale transition duration-200"
                      alt="Google Cloud"
                    />
                  </a>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a href="https://mattermost.com/" aria-label="Mattermost">
                    <img
                      src={MattermostLogo}
                      className="h-16 grayscale transition duration-200"
                      alt="Mattermost"
                    />
                  </a>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 items-center">
                  <a
                    href="https://azure.microsoft.com/"
                    aria-label="MicrosoftAzure"
                  >
                    <img
                      src={MicrosoftAzureLogo}
                      className="h-16 grayscale transition duration-200"
                      alt="Microsoft Azure"
                    />
                  </a>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a href="https://www.mvista.com/" aria-label="MontaVista">
                    <img
                      src={MontaVistaLogo}
                      className="h-16 grayscale transition duration-200"
                      alt="MontaVista"
                    />
                  </a>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a href="https://ncloud.com/" aria-label="Naver Cloud">
                    <img
                      src={NaverLogo}
                      className="h-16 grayscale transition duration-200"
                      alt="Naver Cloud"
                    />
                  </a>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a href="https://opendrives.com/" aria-label="OpenDrives">
                    <img
                      src={OpenDrivesLogo}
                      className="h-16 grayscale transition duration-200"
                      alt="OpenDrives"
                    />
                  </a>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a
                    href="https://osuosl.org/"
                    aria-label="OSU Open Source Labs"
                  >
                    <img
                      src={OSLLogo}
                      className="h-16 grayscale transition duration-200"
                      alt="OSU Open Source Labs"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button large link="/sponsors/" postIcon={<ArrowRightIcon />} primary css={{ marginRight: '24px' }}>{translate('sponsors:title')}</Button>
            <Button large link="/partners/" postIcon={<ArrowRightIcon />} primary>{translate('partners:title')}</Button>
          </div>
        </div>
      </div>
      <div style={{ background: '#000', color: '#fff', padding: '90px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '770px', width: '100%', margin: '0 auto' }}>
          <h1 style={{ fontSize: '36px', marginBottom: '24px' }}>Commercial support available</h1>
          <p style={{ marginBottom: '24px', fontSize: '18px', color: 'rgba(255, 255, 255, 0.6)' }}>Understandably, some users may require more support than just forums and chat rooms. Luckily for them, Rocky Linux is partnered with a number of commercial support providers who’ve got your back.</p>
          <Button large link="#" postIcon={<ArrowRightIcon />} primary>Support partners</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
