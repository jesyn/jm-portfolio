import * as React from 'react';
import './../styles/_global.scss';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout/Layout';
import PersonalData from '../components/PersonalInfo/PersonalInfo';

const AboutMePage: React.FC<PageProps> = () => {
    return (
        <main>
            <Layout>
                <PersonalData />
            </Layout>
        </main>
    );
};

export default AboutMePage;

export const Head: HeadFC = () => <title>About Me</title>;
