import styled from 'styled-components'

export const ContainerButton = styled.button`
background: -webkit-linear-gradient(left, #6b1e9d, #57005f);
border-radius: 20px;
border:none;
height: 38px;
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #EEEEEE;
width: 50%;
cursor: pointer;
&:hover{
    opacity: 0.9;

}
&:active{
    opacity: 0.8;
}

`