/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form";
import React from 'react'
import { Link } from 'react-router-dom';

import { ErrorMesssage,Container, ContainerItens, Label, Input, SiginLink, RegisterImage } from './styles'
import RegisterImg from '../../assents/imgRegister.svg'
import Logo from '../../assents/cadastroClient.png'
import Button from '../../components/button';
import api from '../../services/api'
import { toast } from 'react-toastify';




function Register() {
    //validacao dos campos
    const schema =
    yup.object().shape({
       name: yup.string('Nome obrigatório').required('Nome obrigatório'),
        email: yup.string().email('Digite um email válido').required('Email obrigatório'),
        password: yup.string().required
        ('Senha Obrigatório').min(6,"A senha deve ter pelo menos 6 dígitos"),
        confirmpassword: yup.string().required
        ('Confimar senha Obrigatório').oneOf([yup.ref('password')],'As senhas digitadas não coincidem')
    })
    
    

    const { register, 
        handleSubmit, 
        // eslint-disable-next-line react-hooks/rules-of-hooks, no-unused-vars
        watch, formState: { errors } } = useForm({resolver:yupResolver(schema)});
    


        const onSubmit = async clientData => {
            try{
                const {status} = await api.post('users',{
                name:clientData.name,
                email:clientData.email,
                password:clientData.password
            },{
                validateStatus:() => true
            })
            if (status === 201 || status === 200 ){
                toast.success('Cadastro realizado com sucesso!')
            }
           else if (status === 409){
                toast.error('Email já cadastrado!')
            } else{
                throw new Error()
            }

        }catch(err) {
            toast.error('Falha no servidor')
        }
    }
    return (

        <Container>
            <RegisterImage src={RegisterImg}></RegisterImage>

            <ContainerItens>

                <img src={Logo} alt='foto-hamburger-login' />
                <h1>Cadastre-se</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Label  error ={errors.name?.message} {...register("firstName")}>Nome</Label>
                    <Input  type="text" {...register("name")} error ={errors.name?.message}></Input>
                    <ErrorMesssage>{errors.name?.message}</ErrorMesssage>
                  
                    <Label error ={errors.email?.message} {...register("firstName")}>Email</Label>
                    <Input  type="email" {...register("email")} error ={errors.email?.message}></Input>
                    <ErrorMesssage>{errors.email?.message}</ErrorMesssage>

                    <Label error ={errors.password?.message} >Senha</Label>
                    <Input type="password"  {...register("password")}  error ={errors.password?.message}></Input>
                    <ErrorMesssage>{errors.password?.message}</ErrorMesssage>
                  
                   <Label error ={errors.confirmpassword?.message}>Confirmar senha</Label>
                    <Input type="password"  {...register("confirmpassword")}  error ={errors.confirmpassword?.message}></Input>
                    <ErrorMesssage>{errors.confirmpassword?.message}</ErrorMesssage>

                    <Button type="submit" style={{marginTop:10}}>Cadastrar</Button>
                </form>

                <SiginLink>
                    Já possui conta? <Link style={{color:'white'}} to="/login"  >Login</Link>
                </SiginLink>
            </ContainerItens>
        </Container>
    )
}
export default Register
