/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./NavigatorView.css";
import {Directory, File} from "../types";
import {NavigatorRowView} from "./NavigatorRowView";
import {ChevronLeft} from "@material-ui/icons";
import {App} from "../App";

export interface NavigatorViewProps {
	state: NavigatorViewState | undefined;
	selectedFile: (file: File, state: NavigatorViewState) => void;
}

export interface NavigatorViewState {
	directory: Directory;
	stack: Directory[];
}

export class NavigatorView extends React.Component<NavigatorViewProps, NavigatorViewState> {

	public constructor(props: NavigatorViewProps) {

		super(props);

		const data = App.appData;
		if (data === undefined) {
			const msg = "App data was undefined yet navigator view was displayed."
			App.showError(msg);
			throw new Error(msg)
		}
		this.state = this.props.state ?? { directory: data, stack: [] };
		this.handleRowSelected = this.handleRowSelected.bind(this);
		this.handleBackButtonClicked = this.handleBackButtonClicked.bind(this);

	}

	private handleRowSelected(row: Directory | File) {
		if (Object.keys(row).includes("children")) {
			const dir = row as Directory;
			const stack = this.state.stack;
			stack.push(this.state.directory);
			this.setState({directory: dir, stack});
		} else {
			const file = row as File;
			this.props.selectedFile(file, this.state);
		}
	}

	private handleBackButtonClicked(): void {
		const stack = this.state.stack;
		const dir = stack.pop();
		if (dir === undefined) return;
		this.setState({stack, directory: dir});
	}

	public render(): React.ReactElement {
		return (<div className={"NavigatorView"}>
			<div className={"header"}>
				<ChevronLeft style={{display: this.state.directory.name === "" ? "none" : "block"}} onClick={this.handleBackButtonClicked} className={"chevron"}/>
				<h2>{this.state.directory.name === "" ? "Home" : this.state.directory.name}</h2>
			</div>
			<div className={"rows"}>
				{this.state.directory.children.sort((a, b) => {
					return a.name.localeCompare(b.name);
				}).sort((a, b) => {
					const aVal = Object.keys(a).includes("children") ? 1 : 0;
					const bVal = Object.keys(b).includes("children") ? 1 : 0;
					return bVal - aVal;
				}).map((v, i) => {
					return <NavigatorRowView row={v} key={i} onClick={this.handleRowSelected}/>;
				})}
			</div>
		</div>);
	}

}
