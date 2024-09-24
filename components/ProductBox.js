import styled from "styled-components";
import Button from "@/components/Button";
import Link from "next/link";

const ProductWrapper = styled.div`

`;

const WhiteBox = styled.div`
    background-color: #fff;
    padding: 20px;
    img{
    max-width: 100%;
    max-height:150px;
    }
`;

export default function ProductWhiteBox({ _id, title, description, price, images }) {

    return (
        <ProductWrapper>
            <WhiteBox>
                <img src={images[0]} alt="" />
            </WhiteBox>
            {title}
        </ProductWrapper>

    );
}