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
      <Section className='bg-black w-full h-full'>
        <Container className='m-0 p-[20px 0 48px] w-[580px]'>
          <Text className='text-[32px] leading-3 font-[700px] text-white'>{`Client's name: ${fullname}`}</Text>
          <Text className='text-[32px] leading-3 font-[700px] text-white mt-10'>{`Client's email: ${email}`}</Text>
          <Text className='text-[32px] leading-3 font-[700px] text-white mt-10'>{`Client's phoneNumber: ${phoneNumber}`}</Text>
          <Text className='text-[18px] leading-normal text-white mt-10'>{message}</Text>
        </Container>
      </Section>
    </Html>
  )
}

export default WelcomeEmail
