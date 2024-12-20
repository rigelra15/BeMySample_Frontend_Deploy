import React, { useRef } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { motion, useInView } from 'framer-motion'
import pict from '../../assets/images/c1.png'
import pict2 from '../../assets/images/c2.png'
import pict3 from '../../assets/images/c3.png'

const translations = {
	en: {
		title: 'Case Study',
		deepObservation: 'Deeper and More Varied Observation',
		descDeepObservation:
			'A small quantity of data affects the results of your final assignment observation. With BeMySample, you can attract potential respondents who are your target by using MyPoin',
		moreEvocativeBackground: 'More Evocative Background',
		descMoreEvocativeBackground:
			'With abundant supporting data, your statements will be more convincing, of course with data validity guarantee',
		easierCompletingSchoolTask: 'Easier Completing School Assignment',
		descEasierCompletingSchoolTask:
			'Observation data can be processed more quickly with a high number of respondents who want to contribute',
	},
	id: {
		title: 'Studi Kasus',
		deepObservation: 'Observasi Lebih Mendalam dan Variatif',
		descDeepObservation:
			'Kuantitas data yang sedikit berpengaruh buruk hasil observasi tugas akhir Anda. Dengan BeMySample, Anda dapat menarik calon responden yang menjadi sasaran Anda dengan menggunakan MyPoin',
		moreEvocativeBackground: 'Latar Belakang Lebih Menggugah',
		descMoreEvocativeBackground:
			'Dengan data pendukung yang melimpah, pernyataan Anda akan makin meyakinkan, tentunya dengan jaminan validitas data',
		easierCompletingSchoolTask: 'Tugas Sekolah Selesai Lebih Mudah',
		descEasierCompletingSchoolTask:
			'Observasi data dapat diolah lebih cepat dengan tingginya jumlah responden yang ingin berkontribusi',
	},
}

const CaseStudy = ({ language }) => {
	const sections = [
		{
			title: translations[language].easierCompletingSchoolTask,
			description: translations[language].descEasierCompletingSchoolTask,
			image: pict2,
		},
		{
			title: translations[language].deepObservation,
			description: translations[language].descDeepObservation,
			image: pict,
		},
		{
			title: translations[language].moreEvocativeBackground,
			description: translations[language].descMoreEvocativeBackground,
			image: pict3,
		},
	]

	const responsive = {
		superLarge: {
			breakpoint: { max: 4000, min: 3000 },
			items: 3,
		},
		large: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		medium: {
			breakpoint: { max: 1024, min: 768 },
			items: 1,
		},
		small: {
			breakpoint: { max: 768, min: 0 },
			items: 1,
		},
	}

	const carouselRef = useRef(null)
	const isCarouselInView = useInView(carouselRef, { once: true })

	return (
		<div
			ref={carouselRef}
			className="w-full py-10 px-4 sm:px-10 md:px-16 lg:px-20 bg-gradient-to-r from-[#6AA9F0] to-[#2073DB] text-center"
		>
			<motion.p
				className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-10 font-bold"
				initial={{ opacity: 0, y: 50 }}
				animate={isCarouselInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8 }}
			>
				{translations[language].title}
			</motion.p>

			<Carousel
				responsive={responsive}
				infinite
				autoPlay
				autoPlaySpeed={3000}
				transitionDuration={500}
				showDots
				dotListClass="custom-dot-list-style"
				containerClass="carousel-container"
			>
				{sections.map((section, index) => (
					<motion.div
						key={index}
						className="flex flex-col justify-start items-center bg-white rounded-3xl px-6 py-6 pb-10 mx-4 gap-6 h-full font-inter"
						initial={{ opacity: 0, y: 50 }}
						animate={isCarouselInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8, delay: index * 0.3 }}
					>
						<img
							src={section.image}
							alt={section.title}
							className="w-full h-auto object-contain rounded-md"
						/>
						<div className="flex flex-col items-center text-center">
							<p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
								{section.title}
							</p>
							<p className="text-sm sm:text-base md:text-lg text-gray-600">
								{section.description}
							</p>
						</div>
					</motion.div>
				))}
			</Carousel>
		</div>
	)
}

export default CaseStudy
