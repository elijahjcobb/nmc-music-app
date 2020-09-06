/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./App.css";
import {NavigatorView, NavigatorViewState} from "./navigator/NavigatorView";
import {Directory, File} from "./types";
import {FilePlayer} from "./player/FilePlayer";
import {OStandardType} from "@element-ts/oxygen";

export interface AppProps {

}

export interface AppState {
	file: File | undefined;
	navigatorState: NavigatorViewState | undefined;
	needsLoad: boolean;
}

export class App extends React.Component<AppProps, AppState> {

	public static appData: Directory | undefined;
	public static API_URL: string = "https://api-nmcmusic.jeffreycobb.com";

	public constructor(props: AppProps) {

		super(props);

		this.state = {
			file: undefined,
			navigatorState: undefined,
			needsLoad: App.appData === undefined
		};

		this.handleFileSelected = this.handleFileSelected.bind(this);
		this.handleFileClosed = this.handleFileClosed.bind(this);

	}

	private handleFileSelected(file: File, state: NavigatorViewState): void {
		this.setState({file, navigatorState: state});
	}

	private handleFileClosed(): void {
		this.setState({file: undefined});
	}

	public componentDidMount() {
		if (App.appData !== undefined) return;

		const req = new XMLHttpRequest();

		req.onload = () => {
			const res = OStandardType.string.verify(req.response);
			if (res === undefined) {
				return App.showError("req.response was not a string.");
			}
			const resObj = JSON.parse(res);
			App.appData = resObj as Directory;
			this.setState({needsLoad: false});
		}

		req.open("GET", App.API_URL + "/files");
		req.send();

	}

	public render(): React.ReactElement {
		return (<div className={"App"}>
			<nav>
				<img className={"logo"} src={"./logo-short.png"} alt={"nmc"}/>
				<h1 className={"title"}>NMC Music</h1>
			</nav>
			{this.state.needsLoad ? (<span>Needs Load</span>) : (this.state.file ? <FilePlayer onClosed={this.handleFileClosed} file={this.state.file}/> : <NavigatorView selectedFile={this.handleFileSelected} state={this.state.navigatorState}/>)}
			<footer>
				<a href={"mailto:jecobb@nmc.edu"}>Support</a>
				<p>Built by <a href={"https://elijahcobb.com"} target={"_blank"} rel={"noopener noreferrer"}>Elijah Cobb</a></p>
			</footer>
		</div>);
	}

	public static showError(message: string): void {
		console.error(message);
		alert("An error occurred.");
	}

}
