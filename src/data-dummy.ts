/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */
import {Directory, FileType} from "./types";

export const DUMMY_DATA: Directory = {
	name: "",
	children: [
		{
			name: "Choir 1",
			children: [
				{
					name: "Ave Marie",
					children: [
						{
							name: "S1",
							children: [
								{
									name: "Ave Marie S1",
									type: FileType.song,
									url: "https://www.w3schools.com/html/horse.ogg"
								},
							]
						},
						{
							name: "S2",
							children: []
						}
					]
				}
			]
		},
		{
			name: "Random Song b",
			type: FileType.song,
			url: "https://www.w3schools.com/html/horse.ogg"
		},
		{
			name: "Random Song a",
			type: FileType.song,
			url: "https://www.w3schools.com/html/horse.ogg"
		},
		{
			name: "Random PDF",
			type: FileType.pdf,
			url: "http://www.africau.edu/images/default/sample.pdf"
		},
		{
			name: "Random Video",
			type: FileType.video,
			url: "https://www.w3schools.com/html/mov_bbb.mp4"
		},
		{
			name: "Random Song a",
			type: FileType.song,
			url: "https://www.w3schools.com/html/horse.ogg"
		},
		{
			name: "Random PDF",
			type: FileType.pdf,
			url: "http://www.africau.edu/images/default/sample.pdf"
		},
		{
			name: "Random Video",
			type: FileType.video,
			url: "https://www.w3schools.com/html/mov_bbb.mp4"
		},
		{
			name: "Random Song b",
			type: FileType.song,
			url: "https://www.w3schools.com/html/horse.ogg"
		},
		{
			name: "Random Song a",
			type: FileType.song,
			url: "https://www.w3schools.com/html/horse.ogg"
		},
		{
			name: "Random PDF",
			type: FileType.pdf,
			url: "http://www.africau.edu/images/default/sample.pdf"
		},
		{
			name: "Random Video",
			type: FileType.video,
			url: "https://www.w3schools.com/html/mov_bbb.mp4"
		},
		{
			name: "Choir 2",
			children: [

			]
		},
	]
};
