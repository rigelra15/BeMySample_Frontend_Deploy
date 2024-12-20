import React, { useState, useRef, useEffect } from 'react'
import { Icon } from '@iconify/react'
import Swal from 'sweetalert2'
import C1 from '../../assets/images/SurveyCover.png'
import { motion, AnimatePresence } from 'framer-motion'

const SurveyCard = ({
	title,
	respondents,
	updated,
	image,
	status,
	onEdit,
	onDelete,
	isActive,
	onToggleMenu,
	isCreatedByAI,
}) => {
	const menuRef = useRef(null)

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				onToggleMenu(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [onToggleMenu])

	return (
		<div className="relative flex flex-row items-center justify-between bg-gradient-to-r from-transparent to-[#F5F5F5] rounded-r-[16px] pr-[16px] w-full md:w-auto font-inter">
			<div className="flex flex-row items-center">
				<div className="flex flex-row">
					<p
						className={`px-2 py-1.5 rounded-l-xl text-center flex items-center justify-center gap-2 font-inter z-10 text-white text-xs ${
							status === 'open'
								? 'bg-[#1F38DB]'
								: status === 'closed'
								? 'bg-[#EB221E]'
								: 'bg-[#5A5A5A]'
						}`}
					>
						<p style={{ writingMode: 'vertical-lr', rotate: '180deg' }}>
							{status === 'open' && 'Dibuka'}
							{status === 'closed' && 'Terhenti'}
							{status === 'draft' && 'Draft'}
						</p>
					</p>
					<img
						src={image || C1}
						alt="Survey Cover"
						className="h-[105px] min-w-[180px] md:w-[244px] object-cover rounded-r-[16px]"
					/>
				</div>
				<div className="px-4 md:px-8">
					<div className="flex flex-row gap-2 items-center mb-2">
						<p className="font-bold font-inter text-[16px]">{title}</p>
						{isCreatedByAI && (
							<span className="flex flex-row gap-2 items-center bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full px-3 py-1.5 text-white text-sm">
								<p>AI</p>
								<Icon icon="ri:gemini-fill" fontSize={16} />
							</span>
						)}
					</div>
					<div className="flex flex-row gap-[16px] flex-wrap">
						<div className="flex flex-row items-center gap-2 font-inter">
							<Icon
								icon="material-symbols:person"
								className="text-[13.33px] text-[#595959]"
							/>
							<p className="text-[12px]">{respondents} responden</p>
						</div>
						<div className="flex flex-row items-center gap-2 font-inter">
							<Icon
								icon="mdi:clock"
								className="text-[13.33px] text-[#595959]"
							/>
							<p className="text-[12px]">{updated}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="relative">
				<Icon
					icon="bi:three-dots-vertical"
					className="text-[#595959] text-[36px] cursor-pointer hover:bg-zinc-200 rounded-full p-2"
					onClick={() => onToggleMenu(!isActive)}
				/>

				{/* AnimatePresence for smooth entrance/exit animations */}
				<AnimatePresence>
					{isActive && (
						<motion.div
							ref={menuRef}
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.2 }}
							className="absolute -top-10 left-10 mt-2 w-28 bg-white shadow-md rounded-md p-2 z-20"
						>
							<div
								onClick={onEdit}
								className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
							>
								<Icon icon="material-symbols:edit" className="text-blue-500" />
								<span className="text-blue-500">Edit</span>
							</div>
							<div
								onClick={onDelete}
								className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded text-red-500"
							>
								<Icon icon="material-symbols:delete" />
								<span>Hapus</span>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}

export default SurveyCard
