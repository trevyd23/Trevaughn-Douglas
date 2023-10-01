import { Html } from "@react-email/html"
import { Text } from "@react-email/text"
import { Section } from "@react-email/section"
import { Container } from "@react-email/container"

import { ReactElement } from "react"

type Props = {
  message: string,
  email: string,
  phoneNumber: string,
  fullname: string
}
const WelcomeEmail = ({ message, fullname, email, phoneNumber }:Props):ReactElement => {
  return (
    <Html>
      <Section style={{ backgroundColor: 'black', width: '100%', height: '100%', display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Container style={{ padding: '20px 0px 48px' , margin: 0}}>
        <Container style={{ width: '2rem', display: 'flex', flexDirection: 'row', alignItems: 'center'}} className='w-8 flex flex-row items-center'>
        <Text style={{ color: 'white', fontSize: '1.875rem', lineHeight: '2.25rem', fontFamily: 'monospace'}} >TD</Text>
        <Container style={{ width: '0.5rem', border: '--tw-border-opacity: 1 ;border-color: rgb(48 110 195 / var(--tw-border-opacity))', borderRadius: '9999px', marginTop: '1.25rem', backgroundColor: '#306ec3'}} />
        </Container>
          <Text style={{ fontSize: '20px', lineHeight: '.75rem', color: "white", width: '100%'  }}>{`Client's name: ${fullname}`}</Text>
          <Text style={{ fontSize: '20px', lineHeight: '.75rem', color: "white", marginTop: '2.5rem' }}>{`Client's email: ${email}`}</Text>
          <Text style={{ fontSize: '20px', lineHeight: '.75rem', color: "white", marginTop: '2.5rem' }}>{`Client's phoneNumber: ${phoneNumber}`}</Text>
          <Text style={{ fontSize: '15px', lineHeight: '.75rem', color: "white", marginTop: '2.5rem' }}>{message}</Text>
        </Container>
      </Section>
    </Html>
  )
}

export default WelcomeEmail
