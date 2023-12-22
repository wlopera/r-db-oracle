import React from 'react'
import Layout from '../../hocs/layout/Layout';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/navigation/Footer';

const About = () => {

    return (
        <Layout>
          <Navbar />
          <div className="pt-28">
            <h1>About</h1>
          </div>
          <Footer />
        </Layout>
      );

}

export default About