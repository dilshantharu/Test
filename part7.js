		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			return () => ((n0.ExpObject() + n1.ExpObject()) - 1);
		},
		() => 663,
		() => 610,
		() => "Timer",
		p => {
			const n0 = p._GetNode(0);
			const v1 = p._GetNode(1).GetVar();
			return () => (n0.ExpObject() - v1.GetValue());
		},
		() => "timeout",
		() => 12,
		() => "combo",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => (f0() / 2);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => (f0() / 2.3);
		},
		p => {
			const v0 = p._GetNode(0).GetVar();
			const f1 = p._GetNode(1).GetBoundMethod();
			return () => multiply(v0.GetValue(), f1(0));
		},
		() => "scale",
		() => 314,
		() => 130,
		() => "alpha",
		() => 100,
		() => 40,
		p => {
			const v0 = p._GetNode(0).GetVar();
			return () => Math.round((v0.GetValue() / 4));
		},
		() => 20,
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpObject("errorContent");
		},
		() => "loadCenterBanners",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => Math.round(f0(0, 1));
		},
		p => {
			const n0 = p._GetNode(0);
			return () => and(n0.ExpInstVar(), "");
		},
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			return () => n0.ExpObject((and("bCenter.", n1.ExpInstVar()) + ".URL"));
		},
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			return () => n0.ExpObject((and("bCenter.", n1.ExpInstVar()) + ".offer"));
		},
		() => "loadFooterBanners",
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			return () => n0.ExpObject((and("bBottom.", n1.ExpInstVar()) + ".URL"));
		},
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			return () => n0.ExpObject((and("bBottom.", n1.ExpInstVar()) + ".offer"));
		},
		p => {
			const v0 = p._GetNode(0).GetVar();
			return () => (v0.GetValue() + 1);
		},
		() => "check.Audio",
		() => "menu",
		() => "About",
		() => "Info",
		p => {
			const v0 = p._GetNode(0).GetVar();
			return () => and("Best Score: ", v0.GetValue());
		},
		() => "Tamil",
		() => "about",
		() => "music",
		() => "play.Music",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => Math.round((f0() * 485));
		},
		p => {
			const n0 = p._GetNode(0);
			return () => (116 + n0.ExpObject());
		},
		() => "redfoc-sweetsaga",
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpObject(1);
		},
		() => "load.complete",
		() => "loader"
];


}

