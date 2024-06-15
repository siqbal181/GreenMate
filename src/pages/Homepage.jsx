/* eslint-disable react/prop-types */
import MainInfoBox from '../components/MainInfoBox'
import './Homepage.css'

const Homepage = ({ userData }) => {
  return (
    <div className='page-container'>
      
      <MainInfoBox userData={userData} />
    </div>
  )
}

export default Homepage
