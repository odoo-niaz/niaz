import Layout from '../components/Layout';
import "../styles/styles-1.css"
import "../styles/styles-2.css"
import "../styles/styles-4.css"
import "../styles/styles-3.css"
import "../styles/styles-5.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function App({ Component, pageProps }) {

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}
