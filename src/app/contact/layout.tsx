import { Metadata } from "next"
import ContactUs from "./page"

// either Static metadata
export const metadata: Metadata = {
    title: 'Contact',
    description: 'You can reach out to me in order for us to work on our next great project.'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ContactUs />
    )
}