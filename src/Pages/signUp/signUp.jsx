import React, { useState } from 'react';
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
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    function handleIdInput(e){
        setEmail(e.target.value);
    }
    
    function handlePasswordInput(e){
        setPassword(e.target.value);
    }
    
    const [isActive, setIsActive] = useState(true);
   
    function goodToJoin(){
        return email.length>=7 && password.length>=7 ? setIsActive(false) : setIsActive(true);
    }

    return(
        <article>
            <form method="POST">
                <div className="email-signup">
                 <label for="input-email">이메일</label>
                 <input onKeyUp={goodToJoin} onChange={handleIdInput} type="email" name="user-email" id="input-email" placeholder="이메일 주소를 입력해 주세요."></input>
                 </div>
                 <div className="pwd-signup">
                  <label for="input-pwd">비밀번호</label>
                  <input onKeyUp={goodToJoin} onChange={handlePasswordInput} type="password" name="user-pwd" id="input-pwd" maxLength="16" placeholder="비밀번호를 설정해 주세요."></input>
                </div>
                <button type="submit" formtarget="#none" className={`next-btn ${isActive}`} disabled={isActive}>다음</button>
            </form>
        </article>
    )
}


export default SignUp;

