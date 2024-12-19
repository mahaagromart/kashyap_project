// import Topbar from '../components/topbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Category from '../components/Categorysection';
import Banner from '../components/banner';
import Bestcategory from '../components/BestCategory';
import Categorythree from '../components/Category3';
import Categoryfour from '../components/Category4';
import Testimonial from '../components/Testimonial';
import Counter from '../components/counter';
import Banners from '../components/banner2';
import Categories from '../components/Category2';


export default function Home() {
  return (
    <div>
      {/* <Topbar /> */}
      <Header />
      <Category />
      <Banner />
      <Bestcategory />
      <Categories/>
      <Categorythree/>
      <Categoryfour/>
      <Testimonial />
      <Counter />
      <Banners />
      <Footer />
    </div>
  );
}
