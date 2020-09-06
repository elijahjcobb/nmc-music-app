/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

export enum FileType {
	song,
	video,
	pdf
}

export interface Directory {
	name: string;
	children: (Directory | File)[];
}

export interface File {
	name: string;
	url: string;
	type: FileType;
}
