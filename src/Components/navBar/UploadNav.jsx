import BackBtn from '../button/BackBtn';
import Savebtn from '../button/SaveBtn';

function UploadNav(){
  return(
    <header className="nav-layout">
      <BackBtn/>
      <Savebtn text="업로드"/>
    </header>
  )
}

export default UploadNav;