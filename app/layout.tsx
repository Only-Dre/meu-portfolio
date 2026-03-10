import './globals.css'

export const metadata = {
  title: 'Meu Portfólio',
  description: 'Portfólio profissional moderno',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
