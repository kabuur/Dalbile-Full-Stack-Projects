import React from 'react'
import Nav from './conponents/Nav'
import Body from './conponents/Body'
import Cards from './conponents/Cards'
import Footer from './conponents/Footer'

function App() {
  return (
    <div className='bg-yellow-300'>
      <Nav/>
      <Body/>
      <div className='flex justify-center gap-9 bg-white py-8 flex-wrap '>
        <Cards titile ="software developer" body="Tell us what you like and we'll show your top job opportunities" img = "https://img.freepik.com/premium-vector/developer-male-line-illustration_120816-31726.jpg?w=740"/>

        <Cards titile ="Mobile App developer" body="Tell us what you like and we'll show your top job opportunities" img = "https://img.freepik.com/premium-psd/app-development-3d-icon_235528-1614.jpg?w=740"/>
        <Cards titile ="Training developmebnt" body="Tell us what you like and we'll show your top job opportunities" img = "https://img.freepik.com/premium-vector/mentor-lesson-icon-simple-vector-training-career-help-strategy_98396-52296.jpg?w=740"/>
      </div>
      <Footer/>
    </div>
  )
}

export default App