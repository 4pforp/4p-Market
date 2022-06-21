import React from 'react';
import './signUp.scss';

function SignUp(){
    return(
        <>
        <h1>이메일로 회원가입</h1>
        <InputSection/>
        </>
    )
}

function InputSection(){
    return(
        <article>
            <form method="POST">
            <InputEmail/>
            <InputPassword/>
            <NextButton/>
            </form>
        </article>
    )
}

function InputEmail(){
    return(
        <div className="email-signup">
            <label for="input-email">이메일</label>
            <input type="email" name="user-email" id="input-email" placeholder="이메일 주소를 입력해 주세요."></input>
        </div>
    )
}

function InputPassword(){
    return(
        <div className="pwd-signup">
            <label for="input-pwd">비밀번호</label>
            <input type="password" name="user-pwd" id="input-pwd" maxlength="16" placeholder="비밀번호를 설정해 주세요."></input>
        </div>
    )
}

function NextButton(){
    return(
        <button type="submit" formtarget="#none" className="next-btn">다음</button>
    )
}

export default SignUp;