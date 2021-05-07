import Roact from '@rbxts/roact';
import { Players } from '@rbxts/services';
import { App } from './Pages/App';

const Player = Players.LocalPlayer;
const PlayerGui = Player.WaitForChild('PlayerGui');

Roact.mount(
	<screengui Key={'Main'} IgnoreGuiInset={true} ResetOnSpawn={false}>
		<App />
	</screengui>,
	PlayerGui,
);
