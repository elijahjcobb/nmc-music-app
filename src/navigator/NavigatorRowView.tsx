/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./NavigatorRowView.css";
import {Directory, File, FileType} from "../types";
import {ChevronRight, Description, Folder, Movie, MusicNote} from "@material-ui/icons";

export interface NavigatorRowViewProps {
	row: Directory | File;
	onClick: (row: Directory | File) => void;
}

export interface NavigatorRowViewState {

}

export class NavigatorRowView extends React.Component<NavigatorRowViewProps, NavigatorRowViewState> {

	public constructor(props: NavigatorRowViewProps) {

		super(props);

		this.state = {};
		this.getCorrectIconForType = this.getCorrectIconForType.bind(this);
		this.handleOnClick = this.handleOnClick.bind(this);


	}

	private handleOnClick(): void {
		this.props.onClick(this.props.row);
	}

	private getCorrectIconForType(): React.ReactElement {
		if (Object.keys(this.props.row).includes("children")) {
			return <Folder className={"icon"}/>
		} else {
			const data = this.props.row as File;
			switch (data.type) {
				case FileType.pdf:
					return <Description className={"icon"}/>
				case FileType.song:
					return <MusicNote className={"icon"}/>
				case FileType.video:
					return <Movie className={"icon"}/>
			}
		}

		return <div/>;

	}

	public render(): React.ReactElement {
		return (<div onClick={this.handleOnClick} className={"NavigatorRowView"}>
			{this.getCorrectIconForType()}
			<span className={"name"}>{this.props.row.name}</span>
			<ChevronRight className={"chevron"}/>
		</div>);
	}

}
