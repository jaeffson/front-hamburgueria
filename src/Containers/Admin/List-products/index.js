/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import { Container, ImgProduct,EditIconStyle } from "./styles";
import api from "../../../services/api";
import formatCurrency from "../../../components/FormatCurrency";
import paths from '../../../constants.js/path'



export function ListProducts() {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('products')
            setProducts(data)
        }
        loadOrders()
    },[])
    function isOffer(OfferSts) {
        if (OfferSts) {
            return <CheckCircleIcon style={{ color: '#008000' }} />
        }
        return <CancelIcon style={{ color: '#FF0000' }} />

    }

    function editProduct(product){
        navigate(paths.EditProduct, { state: { product } })
    }



    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell >Preço</TableCell>
                            <TableCell align='center' >Produto em oferta</TableCell>
                            <TableCell ></TableCell>
                            <TableCell>Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products && 
                        products.map((product) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell >{formatCurrency(product.price)}</TableCell>
                                <TableCell align='center' >{isOffer(product.offer)}</TableCell>

                                <TableCell ><ImgProduct src={product.url}></ImgProduct></TableCell>
                                <TableCell ><EditIconStyle onClick={()=> editProduct(product)}></EditIconStyle></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}
export default ListProducts