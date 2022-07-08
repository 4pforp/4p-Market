import BackBtn from '../button/BackBtn';
import Savebtn from '../button/SaveBtn';

function SaveNav(){
  return(
    <aside className="nav-layout">
      <BackBtn/>
      <Savebtn text="저장"/>
    </aside>
  )
}

export default SaveNav;