import * as React from 'react';
import './../styles/_global.scss';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout/Layout';
import ProyectsData from '../components/ProyectsData/ProyectsData';

const Proyects: React.FC<PageProps> = () => {
    return (
        <main>
            <Layout>
                <ProyectsData />
            </Layout>
        </main>
    );
};

export default Proyects;

export const Head: HeadFC = () => <title>About Me</title>;
