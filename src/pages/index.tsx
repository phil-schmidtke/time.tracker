import TimeSVG from '@/components/TimeSvg'
import { Button, Text, Card, Col, Row, Grid } from '@nextui-org/react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Time Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{marginTop: "24px", paddingBottom: "62px"}} className="z-10">
        <div className='hero'>
          <div style={{marginLeft: "24px", marginTop: "48px"}}>
            <Text h1 size={60}
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 80%",
              }}>
              Time Tracker
            </Text>
            <Text h2 size={20}>
              Track your time, sort in categorys and get deteiled insights and analytics into your productivity and time management.
            </Text>
          </div>
          <div style={{display: "block"}}>
            <div style={{marginLeft: "auto", marginRight: "auto"}} >
              <div style={{marginTop: "24px"}}>
                <TimeSVG />
              </div>
            </div>
          </div>
        </div>
        <div className='action'>
            <Button shadow size="lg" style={{zIndex: "0"}}>Log In</Button>
            <Button shadow size="lg" color='secondary' style={{zIndex: "0"}}>Register Now!</Button>
        </div>
        <div style={{marginTop: "100px"}}>
          <Text h3>Features</Text>
          <div className='features'>
            <Grid.Container gap={4} justify="center">
              <Grid>
                <Card css={{ w: "300px", h: "400px" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                  <Col>
                    <Text h3 color="black">
                      Tracking
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src="/times.jpg"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                  />
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <Text color="#000" size={12}>
                        Available soon.
                      </Text>
                      <Text color="#000" size={12}>
                        Get notified.
                      </Text>
                    </Col>
                    <Col>
                      <Row justify="flex-end">
                        <Button flat auto rounded color="primary">
                          <Text
                            css={{ color: "inherit" }}
                            size={12}
                            weight="bold"
                            transform="uppercase"
                          >
                            Notify Me
                          </Text>
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
              </Grid>
              <Grid>
                <Card css={{ w: "300px", h: "400px" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                  <Col>
                    <Text h3 color="white">
                      Categorys
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src="/speed.jpg"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                  />
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#0f111466",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <Text color="white" size={12}>
                        Available soon.
                      </Text>
                      <Text color="white" size={12}>
                        Get notified.
                      </Text>
                    </Col>
                    <Col>
                      <Row justify="flex-end">
                        <Button flat auto rounded color="primary">
                          <Text
                            css={{ color: "inherit" }}
                            size={12}
                            weight="bold"
                            transform="uppercase"
                          >
                            Notify Me
                          </Text>
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
              </Grid>
              <Grid>
                <Card css={{ w: "300px", h: "400px" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                  <Col>
                    <Text h3 color="white">
                      Analytics
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src="/analytics.jpg"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                  />
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <Text color="#000" size={12}>
                        Available soon.
                      </Text>
                      <Text color="#000" size={12}>
                        Get notified.
                      </Text>
                    </Col>
                    <Col>
                      <Row justify="flex-end">
                        <Button flat auto rounded color="primary">
                          <Text
                            css={{ color: "inherit" }}
                            size={12}
                            weight="bold"
                            transform="uppercase"
                          >
                            Notify Me
                          </Text>
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
              </Grid>
            </Grid.Container>
          </div>
        </div>
      </div>
    </>
  )
}
