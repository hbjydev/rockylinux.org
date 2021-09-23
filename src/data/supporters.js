import { Translate } from "../i18n/utils/translate";

import CIQLogo from '../images/ciq-alt.png';
import FortyFiveDrivesLogo from '../images/45drives.jpg';
import AwsLogo from '../images/aws-alt.png';
import GoogleCloudLogo from '../images/google-cloud-alt.png';
import MicrosoftAzureLogo from '../images/azure-alt.png';
import MontaVistaLogo from '../images/montavista.png';
import OpenDrivesLogo from '../images/opendrives.png';
import SeagateFederalLogo from '../images/seagate-federal.png';
import FossHostLogo from '../images/fosshost.png';
import MattermostLogo from '../images/mattermost.png';
import NaverLogo from '../images/naver.png';
import FastlyLogo from '../images/fastly.png';
import ArmLogo from '../images/arm.png';
import DotSlashStudioLogo from '../images/dotslash.png';
import OSLLogo from '../images/osl.png';

export const sponsors = [
    {
        name: 'CIQ',
        grade: 3,
        description: 'We believe in helping people to do great things. This is why CIQ is a founding sponsor of the RESF. We provide commercial support and services for Rocky Linux to customers in research, academia, government, enterprise, partners, and everyone in between.',
        url: 'https://ctrliq.com',
        logo: CIQLogo
    },
    {
        name: '45Drives',
        grade: 3,
        description: '45Drives offers enterprise storage solutions built on powerful & robust open-source software that allows customers to benefit from the cost savings & flexibility of off-the-shelf hardware. Check them out for a fully supported data storage solution at the best cost per terabyte!',
        url: 'https://45drives.com',
        logo: FortyFiveDrivesLogo
    },
    {
        name: 'OpenDrives',
        grade: 3,
        description: 'OpenDrives is a global provider of enterprise-grade, hyper-scalable, network-attached-storage (NAS) solutions. We deliver the highest performing solutions for our customers - to match individual performance needs - for the most robust, complex and mission-critical projects and workflows, on-premises and into the cloud.',
        url: 'https://opendrives.com',
        logo: OpenDrivesLogo
    },
    {
        name: 'MontaVista',
        grade: 3,
        description: 'MontaVista Software is the leader in embedded commercial Linux, supporting MontaVista CGX, Yocto Project®, CentOS and Rocky Linux. MontaVista offers Open Source Software expertise, commercial-quality Linux distros, cost-effective maintenance and support for 10+ year life-cycles.',
        url: 'https://mvista.com',
        logo: MontaVistaLogo
    },
    {
        name: 'Amazon Web Services',
        grade: 3,
        description: 'The RESF utilizes AWS to run much of the underlying infrastructure critical to the development and deployment of the services supporting Rocky Linux. From Koji builders for x86_63 and aarch63 running in EC2 to SRPM blob storage in S3, AWS is foundational to much of what we do.',
        url: 'https://aws.amazon.com',
        logo: AwsLogo
    },
    {
        name: 'Google Cloud',
        grade: 3,
        description: 'As a principal sponsor of the RESF, Google understands the importance of Rocky Linux as a free, open, community enterprise operating system. Providing resources for testing and validation, we’ve partnered with the RESF to ensure Rocky’s status as a first-class citizen on the Google Cloud Platform from day one.',
        url: 'https://cloud.google.com',
        logo: GoogleCloudLogo
    },
    {
        name: 'Microsoft Azure',
        grade: 3,
        description: 'Linux is the fastest growing platform on Azure, running in over half of VM cores. For well over a decade, Microsoft has been investing on Linux, and with partnerships being a central pillar of Microsoft’s open source strategy we collaborate with RESF and the broader Rocky Linux ecosystem to ensure customers have an increasing set of options to deploy Linux workloads on Azure in a supported, managed and secure way.',
        url: 'https://azure.microsoft.com',
        logo: MicrosoftAzureLogo
    },
    {
        name: 'Seagate Federal',
        grade: 0,
        url: 'https://seagategov.com',
        logo: SeagateFederalLogo
    }
];

export const partners = [
    {
        name: 'CIQ',
        grade: 4,
        description: 'We believe in helping people to do great things. This is why CIQ is a founding partner of the RESF. We provide commercial support and services for Rocky Linux to customers in research, academia, government, enterprise, partners, and everyone in between.',
        url: 'https://ctrliq.com',
        logo: CIQLogo
    },
    {
        name: 'NAVER Cloud',
        grade: 3,
        description: 'NAVER Cloud Platform is a South Korean cloud service that started in 2017 under NAVER Cloud, a subsidiary of NAVER. It provides over 170 individual services in 2021 and holds various security certifications including CSA STAR GOLD, GDPR, and more. It also currently provides cloud services in 10 locations around the world.',
        url: 'https://ncloud.com',
        logo: NaverLogo
    },
    {
        name: 'Mattermost',
        grade: 3,
        description: 'Mattermost is an open source messaging solution made for organizations with the highest security requirements. As big believers in the power of open source, Mattermost is thrilled to partner with RESF to help bring an enterprise-grade distribution of Linux to the tech community.',
        url: 'https://mattermost.com',
        logo: MattermostLogo
    },
    {
        name: 'FOSSHost',
        grade: 3,
        description: 'Fosshost (UK CIC #13356530) offers free enterprise grade internet hosting and managed services exclusively for the FOSS community. We\'re on a mission to empower and support every free and open-source software project. To go further, together. Our work never stops. Apply today!',
        url: 'https://fosshost.org',
        logo: FossHostLogo
    },
    {
        name: 'ARM',
        grade: 3,
        description: 'Arm is committed to ensuring its architecture is a first-class citizen from day one with Rocky Linux. We have partnered with the RESF, providing dedicated engineering efforts to complement Rocky Linux development and testing teams, working closely together to test, validate, and support ARM now and long into the future.',
        url: 'https://arm.com',
        logo: ArmLogo
    },
    {
        name: 'Fastly',
        grade: 3,
        description: 'Fastly’s edge cloud platform enables customers to create great digital experiences quickly, securely, and reliably by processing, serving, and securing our customers’ applications as close to their end-users as possible — at the edge of the internet.',
        url: 'https://fastly.com',
        logo: FastlyLogo
    },
    {
        name: 'OSU Open Source Labs',
        grade: 3,
        description: 'The Oregon State University Open Source Lab is a nonprofit organization working for the advancement of open source technologies. The OSL offers world-class hosting services, professional software development and on-the-ground training for promising students interested in open source management and programming.',
        url: 'https://osuosl.org',
        logo: OSLLogo
    },
    {
        name: 'DotSlash Studio',
        grade: 1,
        url: 'https://dotslash.studio/',
        logo: DotSlashStudioLogo
    }
];

export const getGrade = grade => {
    const translate = Translate('supporters');
    return translate(`grades.${grade}`);
};
