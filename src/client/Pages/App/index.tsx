import Roact from '@rbxts/roact';
import { Loading } from '../../Components/loading';

interface AppState {
	amt: number;
	done: boolean;
	visible: boolean;
}

export class App extends Roact.Component<{}, AppState> {
	public inc = true;
	constructor(props: {}) {
		super(props);
		this.state = {
			amt: 0,
			done: false,
			visible: true,
		};
	}
	async didMount() {
		while (this.inc === true) {
			this.setState({
				amt: this.state.amt + 0.01,
			});
			if (this.state.amt >= 1) {
				this.inc = false;
				this.setState({ done: true });
			}

			await Promise.delay(0.001);
		}
	}
	render() {
		return (
			<frame
				Visible={this.state.visible}
				Size={UDim2.fromScale(1, 1)}
				BackgroundColor3={Color3.fromRGB(56, 56, 56)}
			>
				{this.state.done ? (
					<imagelabel
						Key={'Icon'}
						Image={'http://www.roblox.com/asset/?id=3143448393'}
						Size={UDim2.fromScale(0.3, 0.3)}
						AnchorPoint={new Vector2(0.5, 0.3)}
						Position={UDim2.fromScale(0.5, 0.3)}
						BackgroundTransparency={1}
					/>
				) : (
					<textlabel
						Key={'Title'}
						Text={'Loading...'}
						Position={new UDim2(0.5, 0, 0.3, 0)}
						AnchorPoint={new Vector2(0.5, 0)}
						TextColor3={Color3.fromRGB(255, 255, 255)}
						Font={Enum.Font.SourceSansBold}
						TextSize={60}
					/>
				)}

				{this.state.done ? (
					<textbutton
						Key={'Play'}
						Text={'Play'}
						TextSize={30}
						Font={Enum.Font.SourceSansBold}
						Size={UDim2.fromOffset(65, 45)}
						Position={new UDim2(0.5, 0, 0.6, 0)}
						AnchorPoint={new Vector2(0.6, 0)}
						Event={{
							MouseButton1Click: () => this.setState({ visible: false }),
						}}
					>
						<uicorner CornerRadius={new UDim(0, 6)} />
						<uipadding
							PaddingTop={new UDim(0, 6)}
							PaddingBottom={new UDim(0, 6)}
							PaddingLeft={new UDim(0, 6)}
							PaddingRight={new UDim(0, 6)}
						/>
					</textbutton>
				) : (
					<frame
						Size={UDim2.fromScale(1, 1)}
						Position={new UDim2(0.85, 0, 0.6, 0)}
						AnchorPoint={new Vector2(0.6, 0)}
						BackgroundColor3={Color3.fromRGB(56, 56, 56)}
						BorderColor3={Color3.fromRGB(56, 56, 56)}
					>
						<Loading amt={this.state.amt} />
					</frame>
				)}
			</frame>
		);
	}
}
