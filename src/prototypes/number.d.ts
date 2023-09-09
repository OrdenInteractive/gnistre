import { RandomIntNumberProps } from 'ClimpImageOptionProps';

declare global {
	interface Number {
		randomInt: (opt: Omit<RandomIntNumberProps, 'fixed'>) => number;
		randomFloat: (opt: RandomIntNumberProps) => number;
	}
}
