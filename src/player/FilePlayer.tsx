/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {File, FileType} from "../types";
import {ChevronLeft, Launch} from "@material-ui/icons";
import "./FilePlayerView.css";
import {App} from "../App";

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
		const url = App.API_URL + file.url;
		switch (file.type) {
			case FileType.video:
				return (<video className={"player video"} controls><source src={url} type="video/mp4"/></video>);
			case FileType.song:
				return (<audio className={"player song"} controls><source src={url} type="audio/mpeg"/></audio>);
			case FileType.pdf:
				return <a href={url} target={"_blank"} rel={"noopener noreferrer"}><Launch className={"launchIcon"}/></a>;
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
