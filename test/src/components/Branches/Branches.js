import { Pagination, Navigation, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Quote } from '../Quote/Quote';
import './Branches.scss';

const projects = [
	{
		id: 1,
		title: 'Quotely Wallpapers',
		decription: 'Inspirierende Hintergrundbilder-App: Quotely. Große Auswahl an Zitaten, Hintergrundbildern von Stars und Naturfotos.',
		image:'/images/Quotely.jpg'
	},
	{
		id: 2,
		title: 'Super Easy CRM',
		decription: 'Super Easy CRM: Plattform zur Rationalisierung von Verkaufs- und Kundendienstprozessen.',
		image:'/images/crm.png'
	},
	{
		id: 3,
		title: 'Quotely Wallpapers',
		decription: 'Inspirierende Hintergrundbilder-App: Quotely. Große Auswahl an Zitaten, Hintergrundbildern von Stars und Naturfotos.',
		image:'/images/Quotely.jpg'
	},
	{
		id: 4,
		title: 'Super Easy CRM',
		decription: 'Super Easy CRM: Plattform zur Rationalisierung von Verkaufs- und Kundendienstprozessen.',
		image:'/images/crm.png'
	},
	{
		id: 5,
		title: 'Quotely Wallpapers',
		decription: 'Inspirierende Hintergrundbilder-App: Quotely. Große Auswahl an Zitaten, Hintergrundbildern von Stars und Naturfotos.',
		image:'/images/Quotely.jpg'
	},
	{
		id: 6,
		title: 'Super Easy CRM',
		decription: 'Super Easy CRM: Plattform zur Rationalisierung von Verkaufs- und Kundendienstprozessen.',
		image:'/images/crm.png'
	},
]

export const Branches = () => (
	<section className='branches'>
		<h2 className='section-title'>Our Projects</h2>
		<div className='branches-section'>
			<Swiper
				modules={[Pagination, Navigation, Keyboard]}
				spaceBetween={30}
				slidesPerView={4}
				grabCursor={true}
				keyboard={{enabled: true}}
				navigation
				pagination={{ clickable: true }}
				>
					{projects.map(({id, title, decription, image}) => (
						<SwiperSlide key={id}>
							<div className="slider">
								<div className='project-slider'>
									<div className='project-slider__image'>
										<img src={image} alt={title}/>
									</div>
									<div className='project-slider__info'>
										<div className='project-slider__title'>{title}</div>
										<p className='project-slider__decription'>{decription}</p>
									</div>
								</div>
								<Link to={`/project/${id}`} className='project-slider--hidden'>
									<span>READ MORE</span>
									<span>&#707; &#707;</span>
								</Link>
							</div>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
		<Quote/>
	</section>
)