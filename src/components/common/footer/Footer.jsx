import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillInstagram,
	AiFillGoogleCircle,
	AiTwotoneMail,
	AiFillAmazonSquare
} from 'react-icons/ai';
import { HiLocationMarker, HiPhone } from 'react-icons/hi';
import { RiVisaFill } from 'react-icons/ri';
import { FaCcPaypal, FaCcDiscover } from 'react-icons/fa';
import { Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../../shared/images';

function Footer() {
	return (
		<div className="footer">
			<div className="footer__container">
				<div className="footer__container--top">
					<div>
						<img src={logo} alt="" />
						<p>
							Mere Tranquil Existence, That I Neglect My Talents. I Should Be
							IncapAble Of Drawing A Single Stroke At The Present
						</p>

						<Space>
							<a href="https://www.facebook.com/">
								<AiFillFacebook />
							</a>
							<a href="https://twitter.com/">
								<AiFillTwitterSquare />
							</a>
							<a href="https://www.instagram.com/">
								<AiFillInstagram />
							</a>
							<a href="https://www.google.com/">
								<AiFillGoogleCircle />
							</a>
						</Space>
					</div>
					<div>
						<h6>Company</h6>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/faq">Faq</Link>
						</li>
						<li>
							<Link to="/blogs">Blogs</Link>
						</li>
					</div>
					<div>
						<h6>Support</h6>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
						<li>
							<Link to="/support">Support</Link>
						</li>
						<li>
							<Link to="/course">Course</Link>
						</li>
					</div>
					<div>
						<h6>Contact Info</h6>
						<li>
							<HiLocationMarker />
							<span>45/7 Dreem Street, Albania Dnobod, Usa</span>
						</li>
						<li>
							<HiPhone />
							<span>123-458-987254824185</span>
						</li>
						<li>
							<AiTwotoneMail />
							<span>Demo@mail.com</span>
						</li>
					</div>
				</div>

				<div className="footer__container--bottom">
					<div>
						<Space>
							<RiVisaFill />
							<FaCcPaypal />
							<FaCcDiscover />
							<AiFillAmazonSquare />
						</Space>
					</div>
					<div>© 2022 Landev. All Rights Reserved.</div>
					<div>
						<li>
							<Link to="/all-instructor">Instructor</Link>
						</li>
						<li>
							<Link to="/student/become-instructor">Become Instructor</Link>
						</li>
						<li>
							<Link to="/verify-certificate">Verify Certificate</Link>
						</li>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
