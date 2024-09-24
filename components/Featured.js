import Button from "./Button";
import Center from "./Center";
import styled from "styled-components";


const Bg = styled.div`
    background-color: #dc2626;
    color:#fff;
    padding:50px 0;
`;

const Title = styled.h1`
    margin:0;
    font-weight: normal;
    font-size:4rm;
`;

const Desc = styled.p`
    color: white;
    font-size: .8rem;
`;

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    gap: 40px;
    img{
        max-width: 100%;
    }
    div{
        align-items: center;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 5px;
`;

const Column = styled.div`
    display: flex;
    align-items: center;
`;
export default function Featured({ product }) {
    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>{product.title}</Title>
                            <Desc>{product.description}</Desc>
                            <ButtonWrapper>
                                <button outline white size="l">Read more </button>
                                <button primary size="l">Add cart </button>
                            </ButtonWrapper>
                            
                        </div>
                    </Column>
                    <Column>
                        <img src="https://security-ecommerce.s3.amazonaws.com/1727116320679.png" alt="" />
                    </Column>
                </ColumnsWrapper>
            </Center>

        </Bg>
    );
}
