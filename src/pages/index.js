import { useRouter } from "next/router";
import Footer from '../components/footer'
import Header from '../components/header'

export default function Home() {
  const router = useRouter();

  return (
    <div className='bg-dark-gray dark:bg-dark-bg flex items-center flex-col overflow-x-hidden'>
        <Header />
        
        <Footer />
    </div>
  )
};