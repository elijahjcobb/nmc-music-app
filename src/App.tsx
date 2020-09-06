/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./App.css";
import {NavigatorView, NavigatorViewState} from "./navigator/NavigatorView";
import {File} from "./types";
import {FilePlayer} from "./player/FilePlayer";

export interface AppProps {

}

export interface AppState {
	file: File | undefined;
	navigatorState: NavigatorViewState | undefined;
}

export class App extends React.Component<AppProps, AppState> {

	public constructor(props: AppProps) {

		super(props);

		this.state = {
			file: undefined,
			navigatorState: undefined
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

	public render(): React.ReactElement {
		return (<div className={"App"}>
			<nav>
				<img className={"logo"} src={"./logo-short.png"} alt={"nmc"}/>
				<h1 className={"title"}>NMC Music</h1>
			</nav>
			{this.state.file ? <FilePlayer onClosed={this.handleFileClosed} file={this.state.file}/> : <NavigatorView selectedFile={this.handleFileSelected} state={this.state.navigatorState}/>}
		</div>);
	}

}
