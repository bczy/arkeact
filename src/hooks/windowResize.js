/** @format */
import { useLayoutEffect } from 'react';

export function useFullScreen(container, sizeHook, fillHeight = true) {
	useLayoutEffect(() => {
		function updateSize() {
			if (
				(fillHeight && window.innerHeight > window.innerWidth) ||
				(!fillHeight && window.innerHeight < window.innerWidth)
			) {
				sizeHook.setSize(window.width);
				container.current.style.width = `${window.innerWidth}px`;
				container.current.style.height = `${window.innerWidth}px`;
			} else {
				container.current.style.width = `${window.innerHeight}px`;
				container.current.style.height = `${window.innerHeight}px`;
				sizeHook.setSize(window.innerHeight);
			}
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, [fillHeight]);
	return sizeHook;
}
