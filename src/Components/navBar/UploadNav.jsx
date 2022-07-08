import BackBtn from '../button/BackBtn';
import Savebtn from '../button/SaveBtn';

function UploadNav(){
  return(
    <aside className="nav-layout">
      <BackBtn/>
      <Savebtn text="업로드"/>
    </aside>
  )
}

export default UploadNav;