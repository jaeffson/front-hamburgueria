import styled from 'styled-components'



export const Container = styled.div`
        background: linear-gradient(346deg, rgba(0,0,0,1) 0%, rgba(139,36,126,1) 94%);
       background-size: 100%;
       height: 100vh;
        width: 100vw;
        display:flex;
        justify-content: center;
        align-items: center;

`
export const LoginImage = styled.img`
height: 80%;
`
export const ContainerItens = styled.div`


background:-webkit-linear-gradient(left, #272627, #474747);
box-shadow: 0px 4px 15px rgba(74, 144, 226, 0.24);
border-top-right-radius :70px;
height: 80%;
padding: 25px 70px;
display: flex;
justify-content: center;
flex-direction: column;


img{
    width:200px;
   margin: auto;
   
}

h1{
font-weight: 500;
font-size: 25px;
line-height: 20px;
color: #FFFFFF;
text-align: center;
margin-top: 2px;

}
form{
    display: flex;
    flex-direction: column;
}
`
export const Label = styled.p`
font-weight: 500;
font-size: 12px;
line-height: 14px;
color: #FFFFFF;
margin-top: 20px;
margin-bottom:5px;


`
export const ErrorMesssage = styled.p `
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #CC1717;
margin-top: 3px;
`
export const Input = styled.input`
background: #FFFFFF;
box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
border-radius: 5px;
width: 391px;
height: 40px;
border: ${props => (props.error ? '2px solid  #CC1717' : 'none')};
padding-left: 10px;
font-size: 20px;

`

export const SiginLink =styled.p`
font-weight: 300;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
margin-top: 5px;
margin-left: 5px;

a{
    cursor: pointer;
    text-decoration: underline;
    &:hover{
    opacity: 0.8;
}
}

`
