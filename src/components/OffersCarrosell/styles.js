import styled from 'styled-components'


export const Container = styled.div`
background-color: #fbe8e8;
display: flex;
flex-direction: column;
align-items: center;
gap:35px;
padding: 35px 0;
scroll-behavior: smooth;
.rec.rec-arrow{
    background:  #d74141;
    color:#ffffff;
}
.rec.rec-arrow:hover{
    border: 2px solid  #f32121;
    background-color:#e5e5e591 ;
    color:#f32121;

}
.rec.rec-arrow:disabled{
    border:none;
    background-color: #e5e5e591;
    color:#ffffff;
    
}

`

export const CategoryImg = styled.img`



`
export const Button = styled.button`
margin-top: 16px;
background: -webkit-linear-gradient(left, #d74141, #f32121);
border-radius: 8px;
border: none;
height: 50px;
color: #ffffff;
font-weight: 400;
text-align: center;
font-size: 18px;
cursor: pointer;
&:active {
    transform: scale(0.98);
   
}

&:focus {
    outline: none;
}

&.ghost {
    background-color: transparent;
    border-color: #ffffff;
}
&:hover{
   background:#d74141;
}


`
export const ContainerItems = styled.div`
display: flex;
flex-direction: column;

p{
    color:  #f32121;
    font-size: 17px;
    line-height: 120%;
}
.name-product{
    font-size: 20px;
    font-weight: bold;
    color:#4e4b4f;
}

`
export const Image = styled.img`
height: 200px;
border-radius:10px;
margin-bottom:16px;

`
export const OfferH1 = styled.h1`
color: #d74141;
font-size:70px;
`
