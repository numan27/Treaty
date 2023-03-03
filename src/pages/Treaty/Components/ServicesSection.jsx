// import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import IMAGES from '../../../assets/images';

function ServicesSection() {
    return (
        <Container id='services' fluid>
            <Container className='my-5 pb-4 px-0'>
                <Row className='px-0 d-flex justify-content-around align-items-center'>
                    <Col xl="6" lg="6" md="9" sm="8" xs="8" className='px-0 d-flex justify-content-start'>
                        <img className='slicingImg w-100 mh-100' src={IMAGES.SLICING} alt="" />
                    </Col>
                    <Col xl="6" lg="6" md="11" sm="11" xs="11" className='px-0 mt-5 textWrapper'>
                        <div className='textTitle'>
                            <h3 className='servicesTitle'>OUR AMAZING SERVICES</h3>
                            <h1 className='services_subTitle mb-0'>Engage the families you serve</h1>

                            <p className='dashes mt-n3 mb-2 fw-bold'><strong className=''>__ __</strong></p>
                        </div>
                        <div className='servicesContent'>
                            <div>
                                <h4 className='contentTitle fw-bold mb-0'>ELIMINATE HANDWRITTEN MEDICATION LISTS</h4>
                                <p className='contentText mb-4'>Patients and families deserve to help up to date, mobile access to their latest medication list</p>
                            </div>
                            <div>
                                <h4 className='contentTitle fw-bold mb-0'>EMPOWER THE FAMILIES YOUR SERVE</h4>
                                <p className='contentText mb-4'>Families can now have access to your teams visiting schedule and can also request medication and supply refills with a touch of a button</p>
                            </div>
                            <div>
                                <h4 className='contentTitle fw-bold mb-0'>ACCESS TO IMPORTANT DOCUMENTS</h4>
                                <p className='contentText mb-4'>Allow families to have mobile access to important doucments such as consents, plan of care, etc.</p>
                            </div>
                            <div>
                                <h4 className='contentTitle fw-bold mb-0'>KEEP OTHER FAMILY MEMBERS IN THE LOOP</h4>
                                <p className='contentText'>All your patients POA to invite other family members to have mobile access to their loved ones profile</p>
                            </div>
                        </div>
                    </Col>

                </Row>

            </Container>
            <div className="hrBorder" />
        </Container>
    )
}

export default ServicesSection;