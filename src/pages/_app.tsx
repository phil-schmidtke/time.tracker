import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import { Navbar, Button, Link, Text, createTheme, Container } from "@nextui-org/react";
import { useRouter } from 'next/router';
import { useState } from 'react';
import BgGradient from '@/components/BgGradient';

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const pathname = router.pathname;

  const [authenticated, setAuthenticated] = useState(false);

  const collapseItems = [
    "Home",
    "About"
  ];

  const loggedInItems = [
    "Dashboard",
    "Tracking",
    "Analytics"
  ];

  const theme = createTheme({
    type: "dark",
  })

  return (
    <NextUIProvider theme={theme}>
      <Navbar isBordered variant="floating" style={{zIndex: "20"}}>
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
          <Text b color="inherit" style={{marginLeft: "8px"}}>
            Time Tracker
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          {
            authenticated ? <>
              <Navbar.Link isActive={pathname === "/dashbaord" ? true : false} onClick={() => router.push("/")} >Dashboard</Navbar.Link>
              <Navbar.Link isActive={pathname === "/tracking" ? true : false} onClick={() => router.push("/tracking")} >Tracking</Navbar.Link>
              <Navbar.Link isActive={pathname === "/analytics" ? true : false} onClick={() => router.push("/analytics")} >Analytics</Navbar.Link>
            </>
            :
            <>
              <Navbar.Link isActive={pathname === "/" ? true : false} onClick={() => router.push("/")} >Home</Navbar.Link>
              <Navbar.Link isActive={pathname === "/about" ? true : false} onClick={() => router.push("/about")} >About</Navbar.Link>
            </>
          }
        </Navbar.Content>
        <Navbar.Content>
          {authenticated ? <><Navbar.Link color="inherit" onClick={() => setAuthenticated(false)}>
            Logout
          </Navbar.Link></> 
          :
          <><Navbar.Link color="inherit" onClick={() => setAuthenticated(true)}>
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </Navbar.Item></>}
        </Navbar.Content>
        <Navbar.Collapse style={{overflow: "hidden"}}>
        {authenticated ? 
          collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item} style={{overflow: "hidden"}}>
              <Container lg>
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href="#"
                >
                  {item}
                </Link>
              </Container>
            </Navbar.CollapseItem>
          ))
        : collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item} style={{overflow: "hidden"}}>
            <Container lg>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Container>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      </Navbar>
      <main style={{zIndex: "10"}}>
        <Container lg>
          <Component {...pageProps} />
        </Container>
        <div style={{display: "flex", padding: "12px", backdropFilter: "saturate(180%) blur(10px)", background: "rgba(255, 255, 255, 0.1)"}}>
          <div style={{ marginLeft: "auto", marginRight: "auto"}}>
            <Text h5 css={{textAlign: "center"}}>&nbsp;Created by Phil S. and Daniel S.</Text>
          </div>
        </div>
      </main>
      <BgGradient />
    </NextUIProvider>
  )
}
