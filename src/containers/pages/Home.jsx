import React from "react";
import Layout from "../../hocs/layout/Layout";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <h1>Home</h1>
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
