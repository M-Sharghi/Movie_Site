import { Container, Contacts, Logo, Legals } from "./styles";

function Footer(){
    return (
        <Container>
            <Contacts>
                <Logo href="https://twitter.com/"><img src="./icons/twitter.svg" alt="twitter" /></Logo>
                <Logo href="https://www.facebook.com/"><img src="./icons/facebook.svg" alt="facebook" /></Logo>
                <Logo href="https://web.telegram.org/"><img src="./icons/telegram.svg" alt="telegram" /></Logo>
                <Logo href="https://github.com/"><img src="./icons/github.svg" alt="github" /></Logo>
                <Logo href="https://accounts.google.com/"><img src="./icons/email.svg" alt="email" /></Logo>
            </Contacts>
            <div><Legals>LEGALS</Legals>
                <p><a href="">Terms of Service</a></p>
                <p><a href="">Privacy Policy</a></p>
            </div>       
        </Container>
    )
}

export default Footer;