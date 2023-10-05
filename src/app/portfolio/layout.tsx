import { Metadata } from "next"
import Portfolio from "./page"

// either Static metadata
export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'Projects that I have worked on utilizing my skills as a developer.'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Portfolio />
    )
}