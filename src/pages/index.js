import { useRouter } from "next/router";
import Footer from '../components/footer';
import Header from '../components/header';
// import HoverSlider from '@/pages/hoverslider';

export default function Home() {
  const router = useRouter();
 
  return (
    <div>
      <Header />
      {/* <HoverSlider/> */}
      
      <Footer />
    </div>
  );
}