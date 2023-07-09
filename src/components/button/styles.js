import styled from 'styled-components'

export const ContainerButton = styled.button`
 background: -webkit-linear-gradient(left, #d74141, #f32121);
border-radius: 20px;
border:none;
height: 38px;
font-weight: 500;
font-size: 13px;
line-height: 19px;
text-align: center;
color: #EEEEEE;
width: 170px;
cursor: pointer;
&:active {
    transform: scale(0.95);
}

&:focus {
    outline: none;
}

&.ghost {
    background-color: transparent;
    border-color: #ffffff;
}

`