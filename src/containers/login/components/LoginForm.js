import React from 'react';
import styled from 'styled-components';

//FormDiv contains Header, Label, User and Password Field and LogInButton
const FormDiv = styled.form`
    display: flex;
    flex: 0.5;
    min-width: 300px;
    flex-direction: column;
    margin-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    align-items: center;
`;

const FieldLabel = styled.label`
    font-size: 20px;
    width: 95%;
    margin-bottom: 5px;
`

const ErrorLabel = styled.label`
    font-size: 15px;
    font-style: italic;
    text-align: right;
    width: 95%;
    margin-bottom: 5px;
    color: red;
`

const UserField = styled.input`
    width: 95%;
    margin-bottom: 10px;
    font-size: 20px;
`;
const PasswordField = styled.input`
    width: 95%;
    margin-bottom: 10px;
    font-size: 20px;
`;
const LogInButton = styled.input`
    width: 100px;
    font-size: 20px;
`

export const LoginForm = ({userLogIn, failed}) => {
    const checkIfError = () => {
        if (failed) return <ErrorLabel>User or Password not recognised</ErrorLabel>;
    }

    return(
            <FormDiv className="login-form" onSubmit={userLogIn}>
                <FieldLabel className="user-label">Username</FieldLabel>
                <UserField 
                      required
                       type="text"
                       name="username"
                       className="user-field" 
                       placeholder="e.g., Ne0Malk"
                   />
                   <FieldLabel className="password-label">Password</FieldLabel>
                   { checkIfError() }
                   <PasswordField 
                       required
                       type="password"
                       name="password"
                       className="password-field"
                       placeholder="e.g., ************"
                   />
                   <LogInButton 
                       type="submit"
                       className="login-button"
                       value="Log In"
                   />
            </FormDiv>
    )
}

