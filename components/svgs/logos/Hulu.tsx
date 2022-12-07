import { FC, SVGAttributes } from 'react'

const Hulu: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
	return (
		<svg
			width={46}
			height={16}
			viewBox='0 0 46 16'
			fill='currentColor'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path d='M10.5551 6.41362C11.2901 7.00765 11.6582 7.93497 11.6582 9.19588V15.528H8.15624V9.66188C8.15624 9.40617 8.05973 9.1822 7.86674 8.99031C7.67367 8.79838 7.44833 8.70252 7.19115 8.70252H5.15065C4.89303 8.70252 4.67243 8.79842 4.4889 8.99031C4.30493 9.1822 4.21313 9.40617 4.21313 9.66188V15.528H0.683594V0.972412H4.21308V5.7146C4.26827 5.6966 4.39661 5.65979 4.59918 5.60493C4.80122 5.55017 5.06785 5.52276 5.39881 5.52276H7.65986C8.85461 5.52272 9.81974 5.81995 10.5551 6.41362ZM21.6675 5.52272H25.197V11.6629C25.197 12.8142 24.8799 13.7462 24.2457 14.4589C23.6115 15.1716 22.752 15.528 21.6675 15.528H18.1932C16.9799 15.528 16.0101 15.1948 15.2842 14.5275C14.5577 13.8606 14.1949 12.9059 14.1949 11.6629V5.52276H17.7244V11.3888C17.7244 11.645 17.8162 11.8642 18.0002 12.0467C18.1837 12.2296 18.4043 12.3208 18.662 12.3208H20.7025C20.9597 12.3208 21.185 12.2296 21.378 12.0467C21.5711 11.8642 21.6675 11.6449 21.6675 11.3888V5.52272ZM27.8717 0.972412H31.4012V15.528H27.8717V0.972412ZM45.078 5.52272V11.6629C45.078 12.8142 44.7608 13.7462 44.1267 14.4589C43.4925 15.1716 42.633 15.528 41.5485 15.528H38.1017C36.87 15.528 35.891 15.1948 35.1651 14.5275C34.4387 13.8606 34.0759 12.9059 34.0759 11.6629V5.52276H37.6054V11.3888C37.6054 11.645 37.6971 11.8642 37.8811 12.0467C38.0647 12.2296 38.2853 12.3208 38.5429 12.3208H40.6109C40.8682 12.3208 41.0888 12.2296 41.2727 12.0467C41.4563 11.8642 41.5485 11.6449 41.5485 11.3888V5.52272H45.078Z' />
		</svg>
	)
}

export default Hulu
