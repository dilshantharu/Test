
// scripts/behaviors/Fade/c3runtime/runtime.js
{
{const t=self.C3;t.Behaviors.Fade=class extends t.SDKBehaviorBase{constructor(t){super(t)}Release(){super.Release()}}}{const t=self.C3;t.Behaviors.Fade.Type=class extends t.SDKBehaviorTypeBase{constructor(t){super(t)}Release(){super.Release()}OnCreate(){}}}{const t=self.C3,e=self.C3X,i=self.IBehaviorInstance,s=0,a=1,h=2,r=3,n=4;t.Behaviors.Fade.Instance=class extends t.SDKBehaviorInstanceBase{constructor(e,i){super(e),this._fadeInTime=0,this._waitTime=0,this._fadeOutTime=0,this._destroy=!0,this._activeAtStart=!0,this._setMaxOpacity=!1,this._stage=0,this._stageTime=t.New(t.KahanSum),this._maxOpacity=this._inst.GetWorldInfo().GetOpacity()||1,i&&(this._fadeInTime=i[s],this._waitTime=i[a],this._fadeOutTime=i[h],this._destroy=!!i[r],this._activeAtStart=!!i[n],this._stage=this._activeAtStart?0:3),this._activeAtStart&&(0===this._fadeInTime?(this._stage=1,0===this._waitTime&&(this._stage=2)):(this._inst.GetWorldInfo().SetOpacity(0),this._runtime.UpdateRender())),this._StartTicking()}Release(){super.Release()}SaveToJson(){return{"fit":this._fadeInTime,"wt":this._waitTime,"fot":this._fadeOutTime,"d":this._destroy,"s":this._stage,"st":this._stageTime.Get(),"mo":this._maxOpacity}}LoadFromJson(t){this._fadeInTime=t["fit"],this._waitTime=t["wt"],this._fadeOutTime=t["fot"],this._destroy=t["d"],this._stage=t["s"],this._stageTime.Set(t["st"]),this._maxOpacity=t["mo"],3===this._stage?this._StopTicking():this._StartTicking()}Tick(){const e=this._runtime.GetDt(this._inst);this._stageTime.Add(e);const i=this._inst.GetWorldInfo();0===this._stage&&(i.SetOpacity(this._stageTime.Get()/this._fadeInTime*this._maxOpacity),this._runtime.UpdateRender(),i.GetOpacity()>=this._maxOpacity&&(i.SetOpacity(this._maxOpacity),this._stage=1,this._stageTime.Reset(),this.DispatchScriptEvent("fadeinend"),this.Trigger(t.Behaviors.Fade.Cnds.OnFadeInEnd))),1===this._stage&&this._stageTime.Get()>=this._waitTime&&(this._stage=2,this._stageTime.Reset(),this.DispatchScriptEvent("waitend"),this.Trigger(t.Behaviors.Fade.Cnds.OnWaitEnd)),2===this._stage&&(0!==this._fadeOutTime?(i.SetOpacity(this._maxOpacity-this._stageTime.Get()/this._fadeOutTime*this._maxOpacity),this._runtime.UpdateRender(),i.GetOpacity()<=0&&(this._stage=3,this._stageTime.Reset(),this.DispatchScriptEvent("fadeoutend"),this.Trigger(t.Behaviors.Fade.Cnds.OnFadeOutEnd),this._destroy&&this._runtime.DestroyInstance(this._inst))):(this._stage=3,this._stageTime.Reset())),3===this._stage&&this._StopTicking()}_StartFade(){this._activeAtStart||this._setMaxOpacity||(this._maxOpacity=this._inst.GetWorldInfo().GetOpacity()||1,this._setMaxOpacity=!0),3===this._stage&&this.Start()}_RestartFade(){this.Start()}Start(){this._stage=0,this._stageTime.Reset(),0===this._fadeInTime?(this._stage=1,0===this._waitTime&&(this._stage=2)):(this._inst.GetWorldInfo().SetOpacity(0),this._runtime.UpdateRender()),this._StartTicking()}_SetFadeInTime(t){this._fadeInTime=Math.max(t,0)}_GetFadeInTime(){return this._fadeInTime}_SetWaitTime(t){this._waitTime=Math.max(t,0)}_GetWaitTime(){return this._waitTime}_SetFadeOutTime(t){this._fadeOutTime=Math.max(t,0)}_GetFadeOutTime(){return this._fadeOutTime}GetPropertyValueByIndex(t){switch(t){case s:return this._GetFadeInTime();case a:return this._GetWaitTime();case h:return this._GetFadeOutTime();case r:return this._destroy}}SetPropertyValueByIndex(t,e){switch(t){case s:this._SetFadeInTime(e);break;case a:this._SetWaitTime(e);break;case h:this._SetFadeOutTime(e);break;case r:this._destroy=!!e}}GetDebuggerProperties(){const t="behaviors.fade";return[{title:"$"+this.GetBehaviorType().GetName(),properties:[{name:t+".properties.fade-in-time.name",value:this._GetFadeInTime(),onedit:t=>this._SetFadeInTime(t)},{name:t+".properties.wait-time.name",value:this._GetWaitTime(),onedit:t=>this._SetWaitTime(t)},{name:t+".properties.fade-out-time.name",value:this._GetFadeOutTime(),onedit:t=>this._SetFadeOutTime(t)},{name:t+".debugger.stage",value:[t+".debugger."+["fade-in","wait","fade-out","done"][this._stage]]}]}]}GetScriptInterfaceClass(){return self.IFadeBehaviorInstance}};const _=new WeakMap;self.IFadeBehaviorInstance=class extends i{constructor(){super(),_.set(this,i._GetInitInst().GetSdkInstance())}startFade(){_.get(this)._StartFade()}restartFade(){_.get(this)._RestartFade()}set fadeInTime(t){e.RequireFiniteNumber(t),_.get(this)._SetFadeInTime(t)}get fadeInTime(){return _.get(this)._GetFadeInTime()}set waitTime(t){e.RequireFiniteNumber(t),_.get(this)._SetWaitTime(t)}get waitTime(){return _.get(this)._GetWaitTime()}set fadeOutTime(t){e.RequireFiniteNumber(t),_.get(this)._SetFadeOutTime(t)}get fadeOutTime(){return _.get(this)._GetFadeOutTime()}}}self.C3.Behaviors.Fade.Cnds={OnFadeOutEnd:()=>!0,OnFadeInEnd:()=>!0,OnWaitEnd:()=>!0};self.C3.Behaviors.Fade.Acts={StartFade(){this._StartFade()},RestartFade(){this._RestartFade()},SetFadeInTime(t){this._SetFadeInTime(t)},SetWaitTime(t){this._SetWaitTime(t)},SetFadeOutTime(t){this._SetFadeOutTime(t)}};self.C3.Behaviors.Fade.Exps={FadeInTime(){return this._GetFadeInTime()},WaitTime(){return this._GetWaitTime()},FadeOutTime(){return this._GetFadeOutTime()}};
}

// scripts/behaviors/Rotate/c3runtime/runtime.js
{
{const e=self.C3;e.Behaviors.Rotate=class extends e.SDKBehaviorBase{constructor(e){super(e)}Release(){super.Release()}}}{const e=self.C3;e.Behaviors.Rotate.Type=class extends e.SDKBehaviorTypeBase{constructor(e){super(e)}Release(){super.Release()}OnCreate(){}}}{const e=self.C3,t=self.C3X,s=self.IBehaviorInstance,a=0,i=1,n=2;e.Behaviors.Rotate.Instance=class extends e.SDKBehaviorInstanceBase{constructor(t,s){super(t),this._speed=0,this._acceleration=0,this._isEnabled=!0,s&&(this._speed=e.toRadians(s[a]),this._acceleration=e.toRadians(s[i]),this._isEnabled=s[n]),this._isEnabled&&this._StartTicking()}Release(){super.Release()}_SetSpeed(e){this._speed=e}_GetSpeed(){return this._speed}_SetAcceleration(e){this._acceleration=e}_GetAcceleration(){return this._acceleration}SaveToJson(){return{"s":this._speed,"a":this._acceleration,"e":this._isEnabled}}LoadFromJson(e){this._speed=e["s"],this._acceleration=e["a"],this._SetEnabled(e["e"])}Tick(){if(!this._isEnabled)return;const e=this._runtime.GetDt(this._inst);if(0!==e&&(0!==this._acceleration&&(this._speed+=this._acceleration*e),0!==this._speed)){const t=this._inst.GetWorldInfo();t.SetAngle(t.GetAngle()+this._speed*e),t.SetBboxChanged()}}GetPropertyValueByIndex(t){switch(t){case a:return e.toDegrees(this._GetSpeed());case i:return e.toDegrees(this._GetAcceleration());case n:return this._IsEnabled()}}SetPropertyValueByIndex(t,s){switch(t){case a:this._SetSpeed(e.toRadians(s));break;case i:this._SetAcceleration(e.toRadians(s));break;case n:this._SetEnabled(s)}}_SetEnabled(e){this._isEnabled=!!e,this._isEnabled?this._StartTicking():this._StopTicking()}_IsEnabled(){return this._isEnabled}GetDebuggerProperties(){const t="behaviors.rotate";return[{title:"$"+this.GetBehaviorType().GetName(),properties:[{name:t+".properties.speed.name",value:e.toDegrees(this._GetSpeed()),onedit:t=>this._SetSpeed(e.toRadians(t))},{name:t+".properties.acceleration.name",value:e.toDegrees(this._GetAcceleration()),onedit:t=>this._SetAcceleration(e.toRadians(t))},{name:t+".properties.enabled.name",value:this._IsEnabled(),onedit:e=>this._SetEnabled(e)}]}]}GetScriptInterfaceClass(){return self.IRotateBehaviorInstance}};const r=new WeakMap;self.IRotateBehaviorInstance=class extends s{constructor(){super(),r.set(this,s._GetInitInst().GetSdkInstance())}set speed(e){t.RequireFiniteNumber(e),r.get(this)._SetSpeed(e)}get speed(){return r.get(this)._GetSpeed()}set acceleration(e){t.RequireFiniteNumber(e),r.get(this)._SetAcceleration(e)}get acceleration(){return r.get(this)._GetAcceleration()}get isEnabled(){return r.get(this)._IsEnabled()}set isEnabled(e){r.get(this)._SetEnabled(e)}}}self.C3.Behaviors.Rotate.Cnds={IsEnabled(){return this._IsEnabled()}};{const e=self.C3;e.Behaviors.Rotate.Acts={SetSpeed(t){this._SetSpeed(e.toRadians(t))},SetAcceleration(t){this._SetAcceleration(e.toRadians(t))},SetEnabled(e){this._SetEnabled(e)}}}{const e=self.C3;e.Behaviors.Rotate.Exps={Speed(){return e.toDegrees(this._GetSpeed())},Acceleration(){return e.toDegrees(this._GetAcceleration())}}}
}

// scripts/expTable.js
{

const C3 = self.C3;

function unaryminus(n)
{
	return (typeof n === "number" ? -n : n);
}

function bothNumbers(a, b)
{
	return typeof a === "number" && typeof b === "number";
}

function add(l, r)
{
	if (bothNumbers(l, r))
		return l + r;
	else
		return l;
}

function subtract(l, r)
{
	if (bothNumbers(l, r))
		return l - r;
	else
		return l;
}

function multiply(l, r)
{
	if (bothNumbers(l, r))
		return l * r;
	else
		return l;
}

function divide(l, r)
{
	if (bothNumbers(l, r))
		return l / r;
	else
		return l;
}

function mod(l, r)
{
	if (bothNumbers(l, r))
		return l % r;
	else
		return l;
}

function pow(l, r)
{
	if (bothNumbers(l, r))
		return Math.pow(l, r);
	else
		return l;
}

function and(l, r)
{
	if (typeof l === "string" || typeof r === "string")
	{
		// & with either side string does string concatenation
		let lstr, rstr;

		if (typeof l === "number")
			lstr = (Math.round(l * 1e10) / 1e10).toString();
		else
			lstr = l;
		
		if (typeof r === "number")
			rstr = (Math.round(r * 1e10) / 1e10).toString();
		else
			rstr = r;
		
		return lstr + rstr;
	}
	else
	{
		// & with neither side a string does logical AND
		return (l && r ? 1 : 0);
	}
}

function or(l, r)
{
	if (bothNumbers(l, r))
		return (l || r ? 1 : 0);
	else
		return l;
}

self.C3_ExpressionFuncs = [
		() => 0,
		() => "play",
		() => "Popup",
		() => "ad",
		() => "AddScore",
		() => 1,
		() => "Errorpopup",
		() => "changeCenterBanner",
		() => "changeFooterBanner",
		() => "endless",
		() => 6,
		() => "Game.init",
		() => "score",
		p => {
			const v0 = p._GetNode(0).GetVar();
			return () => v0.GetValue();
		},
		() => "update.Score",
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpObject();
		},
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			const n2 = p._GetNode(2);
			return () => n0.ExpObject(n1.ExpObject(), n2.ExpObject(), 0);
		},
		() => "off",
		() => "Spawn",
		() => "draw",
		() => "i",
		() => "j",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0("i");
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0("j");
		},
		() => 2,
		() => "Game",
		p => {
			const v0 = p._GetNode(0).GetVar();
			const v1 = p._GetNode(1).GetVar();
			const f2 = p._GetNode(2).GetBoundMethod();
			const v3 = p._GetNode(3).GetVar();
			return () => ((v0.GetValue() + (v1.GetValue() * f2("i"))) + (v3.GetValue() / 2));
		},
		p => {
			const v0 = p._GetNode(0).GetVar();
			const v1 = p._GetNode(1).GetVar();
			const f2 = p._GetNode(2).GetBoundMethod();
			const v3 = p._GetNode(3).GetVar();
			return () => ((v0.GetValue() + (v1.GetValue() * f2("j"))) + (v3.GetValue() / 2));
		},
		() => "",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const v1 = p._GetNode(1).GetVar();
			return () => Math.round(f0(1, v1.GetValue()));
		},
		() => "init_scale",
		() => 0.3,
		() => "generateTile",
		() => 0.5,
		() => "checkMatch",
		() => "spawn",
		p => {
			const v0 = p._GetNode(0).GetVar();
			const f1 = p._GetNode(1).GetBoundMethod();
			const v2 = p._GetNode(2).GetVar();
			return () => (((v0.GetValue() * f1("j")) + (v2.GetValue() / 2)) - 500);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const f1 = p._GetNode(1).GetBoundMethod();
			const f2 = p._GetNode(2).GetBoundMethod();
			return () => f0("isHorizontalMatch", f1("i"), f2("j"));
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const f1 = p._GetNode(1).GetBoundMethod();
			const f2 = p._GetNode(2).GetBoundMethod();
			return () => f0("isVerticalMatch", f1("i"), f2("j"));
		},
		() => "isMatch",
		() => "check.NoMatch",
		() => "Combos",
		() => "isHorizontalMatch",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(0);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(1);
		},
		p => {
			const n0 = p._GetNode(0);
			const f1 = p._GetNode(1).GetBoundMethod();
			const f2 = p._GetNode(2).GetBoundMethod();
			return () => n0.ExpObject(f1(0), subtract(f2(1), 1), 1);
		},
		p => {
			const n0 = p._GetNode(0);
			const f1 = p._GetNode(1).GetBoundMethod();
			const f2 = p._GetNode(2).GetBoundMethod();
			return () => n0.ExpObject(f1(0), add(f2(1), 1), 1);
		},
		() => 3,
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => subtract(f0(1), 1);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => add(f0(1), 1);
		},
		() => "add.Combo",
		() => "isVerticalMatch",
		p => {
			const n0 = p._GetNode(0);
			const f1 = p._GetNode(1).GetBoundMethod();
			const f2 = p._GetNode(2).GetBoundMethod();
			return () => n0.ExpObject(subtract(f1(0), 1), f2(1), 1);
		},
		p => {
			const n0 = p._GetNode(0);
			const f1 = p._GetNode(1).GetBoundMethod();
			const f2 = p._GetNode(2).GetBoundMethod();
			return () => n0.ExpObject(add(f1(0), 1), f2(1), 1);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => subtract(f0(0), 1);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => add(f0(0), 1);
		},
		() => 5,
		p => {
			const n0 = p._GetNode(0);
			const f1 = p._GetNode(1).GetBoundMethod();
			const f2 = p._GetNode(2).GetBoundMethod();
			return () => n0.ExpObject(f1("i"), f2("j"), 2);
		},
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpInstVar();
		},
		p => {
			const v0 = p._GetNode(0).GetVar();
			return () => and("match_0", v0.GetValue());
		},
		() => "Fall",
		() => "remove.Match",
		() => "setArray",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const f1 = p._GetNode(1).GetBoundMethod();
			return () => add(f0(1), f1(2));
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(3);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(4);
		},
		() => "RedFoc",
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			const v2 = p._GetNode(2).GetVar();
			return () => (n0.ExpObject() + (n1.ExpInstVar() * v2.GetValue()));
		},
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			return () => (n0.ExpInstVar() + n1.ExpInstVar());
		},
		p => {
			const v0 = p._GetNode(0).GetVar();
			const v1 = p._GetNode(1).GetVar();
			return () => (v0.GetValue() + v1.GetValue());
		},
		p => {
