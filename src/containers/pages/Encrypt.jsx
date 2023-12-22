import React from "react";
import Layout from "../../hocs/layout/Layout";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import Header from "../../components/encrypt/Header";

const Encrypt = () => {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <Header />
      </div>
      <Footer />
    </Layout>
  );
};

export default Encrypt;
