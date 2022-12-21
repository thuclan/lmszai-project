import { Link } from 'react-router-dom';

const itemsone = [
	{
		label: <Link to="/build">Development</Link>,
		key: '0',
		children: [
			{
				label: <Link to="/subcategory/courses/game-development">Game Development</Link>,
				key: '1'
			},
			{
				label: <Link to="/subcategory/courses/apple">Apple</Link>,
				key: '2'
			},
			{
				label: <Link to="/subcategory/courses/career-development">Career Development</Link>,
				key: '3'
			},
			{
				label: <Link to="/subcategory/courses/communication">Communication</Link>,
				key: '4'
			}
		]
	},
	{
		label: <Link to="/business">Business</Link>,
		key: '5',
		children: [
			{
				label: <Link to="/subcategory/courses/google">Google</Link>,
				key: '6'
			}
		]
	},
	{
		label: <Link to="/it-software">IT &amp; Software</Link>,
		key: '7',
		children: [
			{
				label: <Link to="/subcategory/courses/data-science">Data Science</Link>,
				key: '8'
			},
			{
				label: <Link to="/subcategory/courses/creativity">Creativity</Link>,
				key: '9'
			}
		]
	},
	{
		label: <Link to="/design">Design</Link>,
		key: '10',
		children: [
			{
				label: <Link to="/subcategory/courses/graphic-design">Graphic Design</Link>,
				key: '11'
			},
			{
				label: <Link to="/subcategory/courses/game-design">Game Design</Link>,
				key: '12'
			},
			{
				label: <Link to="/subcategory/courses/fashion-design">Fashion Design</Link>,
				key: '13'
			}
		]
	},
	{
		type: 'divider'
	},
	{
		label: <Link to="/allcourse">All Courses</Link>,
		key: '15'
	}
];

const items = [
	{
		label: <Link to="/blog">Blog</Link>,
		key: '16'
	},
	{
		label: <Link to="/about">About</Link>,
		key: '17'
	},
	{
		label: <Link to="/contact">Contact</Link>,
		key: '18'
	},
	{
		label: <Link to="/support">Support</Link>,
		key: '19'
	},
	{
		label: <Link to="/privacy-policy">Privacy Policy</Link>,
		key: '20'
	},
	{
		label: <Link to="/cookie-policy">Cookie Policy</Link>,
		key: '21'
	},
	{
		label: <Link to="/terms-conditions">Terms Conditions</Link>,
		key: '22'
	}
];

const array = [
	{
		title: 'A Broad Selection Of Courses.',
		description: 'Choose From 5,000 Online Video Courses With New Additions.',
		icon: 'https://lmszai.zainikthemes.com/uploads/setting/1662702531-GnteVs5zPc.png'
	},
	{
		title: 'Latest Bundle Courses.',
		description: 'Choose From 5,000 Online Video Courses With New Additions.',
		icon: 'https://lmszai.zainikthemes.com/uploads/setting/1662702531-GnteVs5zPc.png'
	},
	{
		title: 'One To One Consultation.',
		description: 'Consult With Your Favorite Consultant!.',
		icon: 'https://lmszai.zainikthemes.com/uploads_demo/about_us_general/team-members-heading-img.png'
	}
];

const options = [
	{
		value: '1',
		label: 'All Categories'
	},
	{
		value: '2',
		label: 'Stay informed'
	},
	{
		value: '3',
		label: 'Get started'
	},
	{
		value: '4',
		label: 'Contact support'
	},
	{
		value: '5',
		label: 'Learn From Experts'
	},
	{
		value: '6',
		label: 'Course Issue'
	},
	{
		value: '7',
		label: 'Discuss with Instructor Issue'
	}
];
export { items, array, itemsone, options };
