			const f0 = p._GetNode(0).GetBoundMethod();
			const v1 = p._GetNode(1).GetVar();
			return () => (f0("j") + v1.GetValue());
		},
		() => "check.Target",
		() => "add.Score",
		() => "pause",
		p => {
			const n0 = p._GetNode(0);
			const v1 = p._GetNode(1).GetVar();
			const f2 = p._GetNode(2).GetBoundMethod();
			return () => (n0.ExpObject() + (v1.GetValue() * f2()));
		},
		() => "Dropped",
		() => 4,
		() => 1.2,
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			const n2 = p._GetNode(2);
			const n3 = p._GetNode(3);
			return () => C3.distanceTo(n0.ExpObject(0, 1), n1.ExpObject(0, 2), n2.ExpObject(), n3.ExpObject());
		},
		() => 10,
		p => {
			const v0 = p._GetNode(0).GetVar();
			return () => (v0.GetValue() + 20);
		},
		() => "Swap",
		() => "swap",
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpObject(0, 0);
		},
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpObject(1, 0);
		},
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			return () => C3.lerp(n0.ExpObject(), n1.ExpObject(1, 1), 0.2);
		},
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			return () => C3.lerp(n0.ExpObject(), n1.ExpObject(1, 2), 0.2);
		},
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			const n2 = p._GetNode(2);
			return () => C3.clamp(n0.ExpObject(), subtract(n1.ExpObject(1, 1), 1), add(n2.ExpObject(1, 1), 1));
		},
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			const n2 = p._GetNode(2);
			return () => C3.clamp(n0.ExpObject(), subtract(n1.ExpObject(1, 2), 1), add(n2.ExpObject(1, 2), 1));
		},
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpObject(1, 1);
		},
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpObject(1, 2);
		},
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpObject(1, 3);
		},
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpObject(1, 4);
		},
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			return () => C3.lerp(n0.ExpObject(), n1.ExpObject(0, 1), 0.2);
		},
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			return () => C3.lerp(n0.ExpObject(), n1.ExpObject(0, 2), 0.2);
		},
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			const n2 = p._GetNode(2);
			return () => C3.clamp(n0.ExpObject(), subtract(n1.ExpObject(0, 1), 1), add(n2.ExpObject(0, 1), 1));
		},
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			const n2 = p._GetNode(2);
			return () => C3.clamp(n0.ExpObject(), subtract(n1.ExpObject(0, 2), 1), add(n2.ExpObject(0, 2), 1));
		},
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpObject(0, 1);
		},
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpObject(0, 2);
		},
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpObject(0, 3);
		},
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpObject(0, 4);
		},
		() => "checkSwap",
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpObject(1, 5);
		},
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpObject(0, 5);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0("checkMatch");
		},
		() => "update.Moves",
		() => "dropped",
		() => "gameover",
		() => "Gameover",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => mod(f0(0), 2);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => mod(f0(1), 2);
		},
		() => "setToCenter",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const v1 = p._GetNode(1).GetVar();
			const v2 = p._GetNode(2).GetVar();
			return () => ((f0() - (v1.GetValue() * (v2.GetValue() + 1))) / 2);
		},
		() => 175,
		() => "Prev...",
		() => "getReCaptchaToken",
		() => "After...",
		() => "gameId",
		() => "reCaptchaToken",
		() => "game_play_id",
		() => "Content-Type",
		() => "application/json",
		() => "Authorization",
		p => {
			const v0 = p._GetNode(0).GetVar();
			return () => ("Bearer " + v0.GetValue());
		},
		() => "endGame",
		() => "https://api.cocacolaavurudu.com/api/v1/users/end-game/KEVILI_CRUSH",
		() => "POST",
		() => 280,
		() => 436,
		() => "SCORE",
		() => 24,
		() => -717750020342783,
		() => 425,
		() => -717750023016447,
		() => 508,
		() => "BEST",
		() => "save.game",
		() => "title",
		() => "PLAYING",
		() => "nomatch",
		() => "NO MOVES!",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0();
		},
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpObject("success");
		},
		() => "start.Fade",
		() => 3600,
		() => "openMessage",
		() => "Restart",
		() => "startGame",
		() => "https://api.cocacolaavurudu.com/api/v1/users/start-game/KEVILI_CRUSH",
		() => "Clear",
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpObject("body.id");
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0("checking.NoMatch");
		},
		() => "NoMatch",
		() => "checking.NoMatch",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const n1 = p._GetNode(1);
			const n2 = p._GetNode(2);
			const n3 = p._GetNode(3);
			return () => f0("has.Match", n1.ExpInstVar(), n2.ExpInstVar(), n3.ExpObject());
		},
		() => "has.Match",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => add(f0(0), 2);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(2);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => add(f0(0), 3);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => subtract(f0(0), 2);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => subtract(f0(0), 3);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => add(f0(1), 2);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => add(f0(1), 3);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => subtract(f0(1), 2);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => subtract(f0(1), 3);
		},
		() => "no-moves",
		() => "Default",
		() => "UI",
		() => "size",
		() => 150,
		() => 0.9,
		() => "btn",
		() => 0.85,
		() => 0.1,
		() => "click",
		() => 720,
		() => 1080,
		() => "fade",
		() => 50,
		() => 0.2,
		() => "paused",
		() => "on",
		() => "drawOutline",
		p => {
			const v0 = p._GetNode(0).GetVar();
			const f1 = p._GetNode(1).GetBoundMethod();
			return () => ((v0.GetValue() / 2) * Math.cos(C3.toRadians((90 * f1()))));
		},
		p => {
			const v0 = p._GetNode(0).GetVar();
			const f1 = p._GetNode(1).GetBoundMethod();
			return () => ((v0.GetValue() / 2) * Math.sin(C3.toRadians((90 * f1()))));
		},
		() => "Background",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => (90 * f0());
		},
		p => {
			const n0 = p._GetNode(0);
			const v1 = p._GetNode(1).GetVar();
			const v2 = p._GetNode(2).GetVar();
			return () => ((n0.ExpObject() + (v1.GetValue() / 2)) + v2.GetValue());
		},
		() => 90,
		() => 180,
		p => {
			const n0 = p._GetNode(0);
			const v1 = p._GetNode(1).GetVar();
			const v2 = p._GetNode(2).GetVar();
			return () => ((n0.ExpObject() - (v1.GetValue() / 2)) - v2.GetValue());
		},
		() => 270,
		() => "add.Timer",
		() => "best",
		p => {
			const n0 = p._GetNode(0);
			return () => (n0.ExpObject() + 6);
		},
