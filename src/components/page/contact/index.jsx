import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Option } from 'antd/es/mentions';
import React from 'react';
import styled from 'styled-components';
import OverLay from '../../overlay/OverLay';

function Contact() {
	return (
		<div>
			<OverLay name="Contact Us" />
			<Wrapper>
				<Flex>
					<FlexColumn>
						<H5>Get in Touch</H5>
						<Flex>
							<EnvironmentOutlined twoToneColor="#7c58fe" />
							<p>32 Yaool, myself down around dupal the street, London</p>
						</Flex>
						<Flex>
							<MailOutlined />
							<p>mail@lmszai.co.uk info@lmazaiinner.co.uk</p>
						</Flex>
						<Flex>
							<PhoneOutlined />
							<p>328-456-07875 128-456-07875</p>
						</Flex>
						<p>
							Strikes the upper surface of the impenetrable foliage of my trees, and
							but a few stray gleams steal about the human. It might take 6 -12 hour
							to replay
						</p>
					</FlexColumn>

					<FlexColumn>
						<Form>
							<H5>Send Us a Message</H5>
							<Form.Item>
								<Input.Group size="large">
									<Row gutter={8}>
										<Col span={12}>
											<Input placeholder="Your Name*" />
										</Col>
										<Col span={12}>
											<Input placeholder="Your Name*" />
										</Col>
									</Row>
								</Input.Group>
							</Form.Item>

							<Form.Item>
								<Input.Group compact size="large">
									<Select defaultValue="Select an issue">
										<Option value="Development">Development</Option>
										<Option value="Web">Web</Option>
									</Select>
								</Input.Group>
							</Form.Item>

							<Form.Item>
								<TextArea rows={4} />
							</Form.Item>
							<Button className="btn" block>
								Submit
							</Button>
						</Form>
					</FlexColumn>
				</Flex>
			</Wrapper>
		</div>
	);
}

export default Contact;

const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #887e8c;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap:1rem;
`;

const H5 = styled.h5`
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 18px;
    line-height: 30px;
    color: #040453;
`;
const Wrapper = styled.div`
  padding: 100px 300px;
`;
