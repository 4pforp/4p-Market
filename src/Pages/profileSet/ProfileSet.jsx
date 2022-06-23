import React from 'react';
import './profileSet.scss';
import PictureIcon from '../../src/assets/images/upload-file.svg';

function ProfileEdit(){
    return(
        <>
        <h1>프로필 설정</h1>
        <h2>나중에 언제든지 변경할 수 있습니다.</h2>
        <EditMain/>
        </>
    )
}

function EditMain(){
    return(
        <main>
            <form name="user-picture" method="post" enctype="multipart/form-data">
            <UploadPic/>
            <EditInfo/>
            <StartButton/>
            </form>
        </main>
    )
}

function UploadPic(){
    return(
        <div className="show-pic">
            <label for="choose-img" className="upload-icon">
                <img src={PictureIcon} alt="upload" className="icon-img"/> 
            </label>
            <input type="file" name="user-pic" id="choose-img" accept="image/*"></input>
        </div>
    )
}

function EditInfo(){
    return(
        <div className="input-info">  
            <label for="input-name">사용자 이름</label>
            <input type="text" id="input-name" name="user-name" maxlength="10" placeholder="2~10자 이내여야 합니다."></input>
            <label for="input-id">계정 ID</label>
            <input type="text" id="input-id" name="user-id" placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다. "></input>
            <label for="input-intro">소개</label>
            <input type="text" id="input-intro" name="user-intro" placeholder="자신과 판매할 상품에 대해 소개해 주세요!"></input>
        </div>
    )
}

function StartButton(){
    return(
    <>
    <button type="submit" formTarget="none" className="btn-start" disabled>감귤마켓 시작하기</button>
    </>
    )
}

export default ProfileSet;