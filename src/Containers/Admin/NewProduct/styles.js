
import styled from 'styled-components'
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";


export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
.sc-jamjDV{
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    
}

form{
    background:#565656;
    border-radius:10px;
    padding:30px;
    display: flex;
    flex-direction: column;
    gap:20px;
}

`
export const ImgProduct = styled.img`
width: 70px;
border-top:50px;

`
export const EditIconStyle = styled(EditIcon)`
cursor: pointer;

&:active {
    transform: scale(0.95);
    background-color: transparent;
    border-color: #ffffff;
}

`
export const Label = styled.p`
font-size: 13px;
color:#ffffff;

`
export const Input = styled.input`
height: 40px;
background:#ffffff;
box-shadow: 8px 4px 14px rgba(0,0,0,0.1);
border:none;
border-radius:8px;
width:100%;
padding-left:5px ;
min-width:280px
`
export const ButtonAdd = styled(Button)`

`
export const LabelUpload =  styled.label`
cursor:pointer;
display: flex;
align-items: center;
border: 1px dashed #ffffff ;
justify-content: center;
padding:10px;
color: #ffffff;
margin-bottom:10px;
gap:5px;

input{
opacity: 0;
width: 1px;
}
`

