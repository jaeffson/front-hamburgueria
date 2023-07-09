
import styled from 'styled-components'
import EditIcon from '@mui/icons-material/Edit';


export const Container = styled.div`

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



