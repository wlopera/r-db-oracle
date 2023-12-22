import Layout from "../../hocs/layout/Layout";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import Header from "../../components/database/Header";

const Database = () => {

  return (
    <Layout>
      <Navbar />     
      <Header />     
      <Footer />
    </Layout>
  );
};

export default Database;
