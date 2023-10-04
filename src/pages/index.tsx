import * as React from 'react';
import './../styles/_global.scss';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout/Layout';
import { Home } from '../components/Home/Home';
import { Helmet } from 'react-helmet';

const IndexPage: React.FC<PageProps> = () => {
    return (
        <main>
            <Helmet>
                <title>Porfolio web Jesica Muñoz</title>
                <meta
                    name='description'
                    content='Sitio web personal utilizando Gatsby, donde podrás conocer en detalle mi información personal, descargar mi CV y explorar mi experiencia profesional. Descubre quién soy, mi trayectoria y habilidades en esta página web personalizada.'
                />
                <link rel='icon' href='/logo.png' />
            </Helmet>
            <Layout>
                <Home />
            </Layout>
        </main>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Porfolio web Jesica Muñoz</title>;
