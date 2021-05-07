import Roact from '@rbxts/roact';

interface LoadingProps {
	amt: number;
}

export class Loading extends Roact.Component<LoadingProps, {}> {
	render() {
		return (
			<frame Size={UDim2.fromScale(0.5, 0.07)} BackgroundColor3={Color3.fromRGB(70, 70, 70)}>
				{/* <frame
				Size={new UDim2(0, 0, 0, 0)}
				Position={new UDim2(1, 0, 1, 0)}
				BackgroundColor3={Color3.fromRGB(70, 70, 70)}
			> */}
				<uicorner CornerRadius={new UDim(0, 6)} />

				<frame Size={UDim2.fromScale(this.props.amt, 1)} BackgroundColor3={Color3.fromRGB(0, 0, 0)}>
					<uicorner CornerRadius={new UDim(0, 6)} />
				</frame>
			</frame>
		);
	}
}
