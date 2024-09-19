import Pic from '/images/publicimage.jpg'
import Pic1 from '../assets/images/assetimage.jpg'

export const LearnUageOfImage = () => {
  return (
    <>
        <img src={Pic} alt="" width='400px'/>
        <br />
        <img src={Pic1} alt="" width='200px'/>
    </>
  )
}
