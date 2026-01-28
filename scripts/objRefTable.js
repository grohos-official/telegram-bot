const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.GamePush_Channels,
		C3.Plugins.Eponesh_GameScore,
		C3.Plugins.HTMLElement,
		C3.Behaviors.Anchor,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.Button,
		C3.Behaviors.Tween,
		C3.Plugins.System.Cnds.OnLoadFinished,
		C3.Plugins.Eponesh_GameScore.Cnds.VariablesCompare,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Button.Cnds.PickByUID,
		C3.Plugins.Button.Acts.SetCSSStyle,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.SetVar,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Eponesh_GameScore.Exps.PlayerGet,
		C3.Plugins.Eponesh_GameScore.Exps.PlayerID,
		C3.Plugins.Button.Acts.SetText
	];
};
self.C3_JsPropNameTable = [
	{GamePushChannels: 0},
	{GamePush: 0},
	{Якорь: 0},
	{Loading_html: 0},
	{Text: 0},
	{Тач: 0},
	{Твинанимация: 0},
	{MenuButton: 0},
	{BackgroundButton: 0},
	{Username: 0},
	{UserID: 0},
	{Menu_Steek: 0}
];

self.InstanceType = {
	GamePushChannels: class extends self.C3.Plugins.GamePush_Channels.Instance {},
	GamePush: class extends self.C3.Plugins.Eponesh_GameScore.Instance {},
	Loading_html: class extends self.IHTMLElementInstance {},
	Text: class extends self.ITextInstance {},
	Тач: class extends self.IInstance {},
	MenuButton: class extends self.IButtonInstance {},
	BackgroundButton: class extends self.IButtonInstance {},
	Username: class extends self.ITextInstance {},
	UserID: class extends self.ITextInstance {}
}