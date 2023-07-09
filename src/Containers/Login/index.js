/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable jsx-a11y/anchor-is-valid */

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { useForm } from "react-hook-form";
import React from 'react'
import { toast } from 'react-toastify';
import { useUser } from '../../hooks/UserContext';
import { Link, useNavigate } from 'react-router-dom';

import { ErrorMesssage, Container, ContainerItens, Label, Input, SiginLink, LoginImage } from './styles'
import LoginImg from '../../assents/login-Imagem.svg'
import Logo from '../../assents/LoginIcon.png'
import {Button} from '../../components';
import api from '../../services/api'




export function Login() {
   
    //validacao dos campos
    const NavHistory = useNavigate()
    const { putUserData } = useUser()


    const schema =
        yup.object().shape({
            email: yup.string().email('Digite um email válido').required('Email obrigatório'),
            password: yup.string().required
                ('Senha Obrigatório').min(6, "A senha deve ter pelo menos 6 dígitos"),
        }).required();

    const { register,
        handleSubmit,
        // eslint-disable-next-line react-hooks/rules-of-hooks, no-unused-vars
        watch, formState: { errors } } = useForm({ resolver: yupResolver(schema) });


    const onSubmit = async clientData => {
        const { data } = await toast.promise(
            api.post('sessions', {
                email: clientData.email,
                password: clientData.password
            }),
            {
                pending: 'Verificando dados',
                success: 'Seja vem vindo(a)',
                error: 'Email ou senha inválidos'
            }
        )

        putUserData(data)
        setTimeout(()=>{
            if(data.admin){
                NavHistory('/pedidos')
            }else{
                NavHistory('/')
            }
       

        },2000)
      

    }
    return (

        <Container>
            <LoginImage src={LoginImg}></LoginImage>

            <ContainerItens>

                <img src={Logo} alt='foto-hamburger-login' />
                <h1>Login</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label {...register("firstName")}>Email</Label>
                    <Input type="email" {...register("email")} error={errors.email?.message}></Input>
                    <ErrorMesssage>{errors.email?.message}</ErrorMesssage>

                    <Label>Senha</Label>
                    <Input type="password"  {...register("password")} error={errors.password?.message}></Input>
                    <ErrorMesssage>{errors.password?.message}</ErrorMesssage>

                    <Button type="submit" style={{ marginTop: 25 }}>Login</Button>
                </form>

                <SiginLink>Não possui conta? <Link style={{ color: '#6d6969' }} to="/cadastro">Criar</Link>
                </SiginLink>
            </ContainerItens>
        </Container>
    )
}
