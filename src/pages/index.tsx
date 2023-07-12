import * as React from 'react';
import './../styles/_global.scss';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout/Layout';
import { Home } from '../components/Home/Home';

const IndexPage: React.FC<PageProps> = () => {
    return (
        <main>
            <Layout>
                <Home />
            </Layout>
        </main>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
