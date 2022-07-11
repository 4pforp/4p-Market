import BackBtn from '../button/BackBtn';
import Savebtn from '../button/SaveBtn';

function SaveNav(){
  return(
    <header className="nav-layout">
      <BackBtn/>
      <Savebtn text="저장"/>
    </header>
  )
}

export default SaveNav;