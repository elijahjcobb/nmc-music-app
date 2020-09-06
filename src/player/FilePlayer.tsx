/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {File, FileType} from "../types";
import {ChevronLeft} from "@material-ui/icons";
import "./FilePlayerView.css";

export interface FilePlayerProps {
	file: File;
	onClosed: () => void;
}

export interface FilePlayerState {

}

export class FilePlayer extends React.Component<FilePlayerProps, FilePlayerState> {

	public constructor(props: FilePlayerProps) {

		super(props);

		this.state = {};

	}

	private getFrameForFile(): React.ReactElement {
		const file = this.props.file;
		switch (file.type) {
			case FileType.video:
				return (<video className={"player video"} controls><source src={file.url} type="video/mp4"/></video>);
			case FileType.song:
				return (<audio className={"player song"} controls><source src={file.url} type="audio/mpeg"/></audio>);
			case FileType.pdf:
				return <object className={"player pdf"} data={file.url} type={"application/pdf"}><a href={file.url} target={"_blank"} rel={"noopener noreferrer"}>Your device does not support viewing PDF files in line. Click to open a new tab.</a></object>;
		}
		return <div/>;
	}

	public render(): React.ReactElement {
		return (<div className={"FilePlayer"}>
			<div className={"header"}>
				<ChevronLeft onClick={this.props.onClosed} className={"chevron"}/>
				<h2>{this.props.file.name}</h2>
			</div>
			<div className={"container"}>
				{this.getFrameForFile()}
			</div>
		</div>);
	}

}
