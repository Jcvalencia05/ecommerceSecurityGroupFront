import styled from "styled-components";
import Button from "@/components/Button";
import Link from "next/link";
import CartIcon from "./icons/CartIcon";

const ProductWrapper = styled.div`
    text-align:center;
`;

const WhiteBox = styled.div`
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

const Title = styled.h2`
    font-weight: normal;
    font-size: 1rem;
    margin: 0;
    text-align:center;
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
    font-weight:400;
    text-align: center;
    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
        font-weight:600;
        text-align: center;
    }
`;

export default function ProductWhiteBox({ _id, title, description, price, images }) {

    return (
        <ProductWrapper>
            <WhiteBox>
                <div>
                    <img src={images[0]} alt="" />
                </div>
            </WhiteBox>
            <ProductInfoBox>
                <Title>{title}</Title>
                    <Price>
                        ${price}
                    </Price>
                <Button red>
                    <CartIcon />
                    Add to cart
                </Button>
            </ProductInfoBox>
        </ProductWrapper>
    );
}