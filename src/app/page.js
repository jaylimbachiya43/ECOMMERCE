import ProductList from '@/screens/Products'
import Navbar from '@/Components/Navbar'
import ContactForm from '@/Components/ContactUs'


export default function Home() {
  return (
    <>
    {/* <Index/> */}
    <Navbar/>
    <ProductList/>
    
    <ContactForm/>
    </>
  )
}
