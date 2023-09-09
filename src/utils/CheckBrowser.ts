import { BrowserDetect } from '../';

/**
 * Detect the browser engine and return the result.
 * @sjuhyeon
 * @returns {string|boolean} Returns the detected browser engine as a string ('Blink' for Blink engine, 'Chrome' for Chrome, or 'Unknown' if not detected),
 * or `false` if detection is inconclusive.
 *
 * @example
 * const browserEngine = CheckBrowser();
 * if (browserEngine === 'Blink') {
 *   console.log('This is a Blink-based browser.');
 * } else if (browserEngine === 'Chrome') {
 *   console.log('This is the Chrome browser.');
 * } else {
 *   console.log('Browser engine is unknown.');
 * }
 */
export default function CheckBrowser(): BrowserDetect {
	let chrome;

	if (typeof window.chrome !== 'undefined') {
		chrome = true;
	}

	const isBlink = chrome && !!window.CSS;

	const res = {
		isBlink: isBlink ? 'Blink' : false,
		isChrome: chrome ? 'Chrome' : false,
	};

	return res.isBlink || res.isChrome || 'Unknown';
}
