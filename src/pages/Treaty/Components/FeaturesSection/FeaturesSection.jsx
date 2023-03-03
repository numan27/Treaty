// import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import IMAGES from "../../../../assets/images/index";

function Features() {
    return (
        <Container id='features' fluid className='px-0'>
            <Container className='featureContent mt-3 mb-5 px-0'>
                <Row className='py-5 d-flex justify-content-xl-between justify-content-center'>

                <Col xl="2" lg="2" md="6" sm="10" xs="10" className='featureContent_Wrapper d-flex align-items-center justify-content-center px-0 my-4'>
                        <Card className='w-100 d-flex align-items-center text-center border-0 px-4'>
                            <div className="imgWrapper p-4 rounded-circle d-flex align-items-center justify-content-center">
                                <Card.Img variant="top" src={IMAGES.CHAT_ICON} />
                            </div>
                            <Card.Body className='cardBody'>
                                <Card.Title className='font-weight-bold cardTitle'>Messaging</Card.Title>
                                <Card.Text className='cardText'>
                                    Direct and Group Message your team
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl="2" lg="2" md="6" sm="10" xs="10" className='d-flex align-items-center justify-content-center px-0 my-4'>
                        <Card className='w-100 d-flex align-items-center text-center border-0 px-2'>
                            <div className="imgWrapper p-4 rounded-circle d-flex align-items-center justify-content-center">
                                <Card.Img variant="top" src={IMAGES.MEDICATION_ICON} />
                            </div>
                            <Card.Body className='cardBody'>
                                <Card.Title className='font-weight-bold cardTitle'>Medication</Card.Title>
                                <Card.Text className='cardText'>
                                    Track supply and medication refills by last requested date by patients family
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl="2" lg="2" md="6" sm="10" xs="10" className='d-flex align-items-center justify-content-center px-0 my-4'>
                        <Card className='w-100 d-flex align-items-center text-center border-0'>
                            <div className="imgWrapper p-4 rounded-circle d-flex align-items-center justify-content-center">
                                <Card.Img variant="top" src={IMAGES.SCHEDULE_ICON} />
                            </div>
                            <Card.Body className='cardBody'>
                                <Card.Title className='font-weight-bold cardTitle'>Schedule</Card.Title>
                                <Card.Text className='cardText'>
                                    Transparent Scheduling for all team members on shared calendars with mobile acccess
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl="2" lg="2" md="6" sm="10" xs="10" className='d-flex align-items-center justify-content-center px-0 my-4'>
                        <Card className='w-100 d-flex align-items-center text-center border-0'>
                            <div className="imgWrapper p-4 rounded-circle d-flex align-items-center justify-content-center">
                                <Card.Img variant="top" src={IMAGES.COMPLIANCE_ICON} />
                            </div>
                            <Card.Body className='cardBody'>
                                <Card.Title className='font-weight-bold cardTitle'>Compliance</Card.Title>
                                <Card.Text className='cardText'>
                                    Ensure compliance by allowing patients to have mobile, up-to-date access to their medication list
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl="2" lg="2" md="6" sm="10" xs="10" className='d-flex align-items-center justify-content-center px-0 my-4'>
                        <Card className='w-100 d-flex align-items-center text-center border-0'>
                            <div className="imgWrapper p-4 rounded-circle d-flex align-items-center justify-content-center">
                                <Card.Img variant="top" src={IMAGES.TRACK_ICON} />
                            </div>
                            <Card.Body className='cardBody'>
                                <Card.Title className='font-weight-bold cardTitle'>Track Visit</Card.Title>
                                <Card.Text className='cardText'>
                                    Track your staffs made visits to each patient
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div className="hrBorder" />
        </Container>


    )
}

export default Features;