import styled from "styled-components";
import Button from "@/components/Button";
import Link from "next/link";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductWrapper = styled.div`
    text-align:center;
`;

const WhiteBox = styled(Link)`
    background-color: #fff;
    padding: 20px;
    height:120px;
    text-align: center;
    display:flex;
    align-items:center;
    justify-content: center;
    border-radius: 10px;
    img{
    max-width: 100%;
    max-height:150px;
    }
`;

const Title = styled(Link)`
    font-weight: normal;
    font-size: 1rem;
    margin: 0;
    text-align:center;
    color: inherit;
    text-decoration:none;
`;

const ProductInfoBox = styled.div`
    margin-top: 5px;
`;

const PriceRow = styled.div`
    display: block;
    @media screen and (min-width: 768px) {
        display: flex;
        gap: 5px;
    }
    align-items: center;
    justify-content:space-between;
    margin-top:2px;
    
`;

const Price = styled.div`
    font-size: 1rem;
    font-weight:500;
    text-align: center;
    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
        font-weight:600;
        text-align: center;
    }
`;

export default function ProductWhiteBox({ _id, title, description, price, images }) {

    const {addProduct} = useContext(CartContext);
    const url = '/product/' + _id;
    return (
        <ProductWrapper>
            <WhiteBox href={url}>
                <div>
                    <img src={images[0]} alt="" />
                </div>
            </WhiteBox>
            <ProductInfoBox>
                <Title href={url}>{title}</Title>
                    <Price>
                        ${price}
                    </Price>
                <Button block onClick={() => addProduct(_id)} primary>
                    <CartIcon />
                    Add to cart
                </Button>
            </ProductInfoBox>
        </ProductWrapper>
    );
}