import Button from "./Button";
import Center from "./Center";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import { useContext } from "react";


const Bg = styled.div`
    background-color: #dc2626;
    color:#fff;
    padding:50px 0;
`;

const Title = styled.h1`
    margin:0;
    font-weight: normal;
    font-size:4rm;
    text-align:center;
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

const Column = styled.div`
    display: flex;
    align-items: center;
    text-align:justify;
`;

const Final = styled.h5`
    color: white;
    font-size: .8rem;
    text-align:center;
`;
export default function Featured({ product }) {
    
    const {addProduct} = useContext(CartContext);
    function addFeaturedTocart(){
        addProduct(product._id);
    }

    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>¡Bienvenidos a Security Group!</Title>
                            <Desc>En Security Group, nos dedicamos a ofrecer soluciones integrales de seguridad
                                para establecimientos, empresas, y hogares. Sabemos lo importante que es proteger
                                lo que más te importa, por eso ponemos a tu disposición la mejor tecnología en
                                sistemas de seguridad, cámaras de vigilancia, alarmas, controles de acceso y mucho más.</Desc>
                            <Desc>Nuestra misión es garantizar tu tranquilidad con productos confiables y un servicio 
                                de calidad que se adapta a tus necesidades. Navega por nuestro catálogo y descubre las 
                                mejores opciones para proteger tus espacios.</Desc>
                            <Final >¡En Security Group, tu seguridad es nuestra prioridad!</Final>
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
