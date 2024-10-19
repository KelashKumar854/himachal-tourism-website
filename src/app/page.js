import Navbar from './../components/Navbar'
import EnuireForm from './../components/EnquireForm'
import Locations from './../components/Locations'
import Packages from './../components/Packages'
import Review from './../components/Review'
import Specification from './../components/Specification'
import Footer from './../components/Footer'

export default function Home() {
  return (
   <>
     <Navbar/>
     <EnuireForm/>
     <Locations/>
     <Packages/>
     <Review/>
     <Specification/>
     <Footer/> 
   </>
  );
}
