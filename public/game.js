export default function createGame() {

	const state = {
		observers: []
	}

	function subscribe(observerFunction) {
		state.observers.push(observerFunction)
	}

	function notifyAll(command) {
		for (const observerFunction of state.observers) {
			observerFunction(command)
		}
	}

	const chars = {
		player: {
			atk: 10,
			def: 7,
			hp: 20,
			ini: 14
		},
		enemy: {
			atk: 10,
			def: 7,
			hp: 20,
			ini: 10
		}
	}
	var allstats
	var eact
	// command Recebe coordenadas do clique do mouse
	function action(command) {
		var random = Math.floor(Math.random() * 10)
		if (random >= 4) {
			eact = 'atk'
		}
		else{
			eact = 'def'
		} 
		const x = command.x
		const y = command.y
		if (x > 618 && x < 718 && y > 218 && y < 318) {
			console.log(`Batalha iniciada`)
			notifyAll(chars)
		}
		else if (x > 118 && x < 218 && y > 418 && y < 518) {
			const act = "atk"
			battle(act, eact)			
		}
		else if (x > 268 && x < 368 && y > 418 && y < 518) {
			const act = "def"
			battle(act, eact)
		}
	}

	function setstats(info) {
		allstats = info
		allstats.actions = [0]
	}

	function battle(act, eact) {
		if (typeof allstats === "undefined") {
			console.log(`Jogadores não iniciado`)
		}
		else{
			actions(act, eact, allstats.coin)
		}
	}

	function rules(act, eact) {
		if (act == "atk" && eact == "atk") {
			atkatk(allstats.coin)
		}
		else if (act == "atk" && eact == "def") {
			atkdef(allstats.coin)
		}
		else if (act == "def" && eact == "atk") {
			defatk(allstats.coin)
		}
		else if (act == "def" && eact == "def") {
			defdef(allstats.coin)
		}
	}

	function atkatk(coin){
		if (allstats.stat.suplus !== 0) {
			allstats.stats.suplus = 0
			allstats.stat.suplus = 0
		}
		if (coin == 0){
			var admg = Math.floor(allstats.stats.atk / 2)
			var edmg = Math.floor(allstats.stat.atk / 3)
			allstats.stats.hp = allstats.stats.hp - edmg
			allstats.stat.hp = allstats.stat.hp - admg
			console.log(`Você levou ${edmg} de dano e ficou com ${allstats.stats.hp} de vida;`)
			console.log(`Seu inimigo levou ${admg} de dano e ficou com ${allstats.stat.hp} de vida`)
		}
		else {
			var admg = Math.floor(allstats.stats.atk / 3)
			var edmg = Math.floor(allstats.stat.atk / 2)
			allstats.stats.hp = allstats.stats.hp - edmg
			allstats.stat.hp = allstats.stat.hp - admg
			console.log(`Você levou ${edmg} de dano e ficou com ${allstats.stats.hp} de vida;`)
			console.log(`Seu inimigo levou ${admg} de dano e ficou com ${allstats.stat.hp} de vida`)
		}
	}

	function atkdef(coin){
		if (coin == 0){
			if (allstats.stat.suplus !== 0) {
				var s1 = allstats.stat.def + allstats.stat.suplus
				var admg = allstats.stats.atk - s1
				if (admg > 0) {
					allstats.stat.hp = allstats.stat.hp - edmg
					console.log(`Seu Inimigo defendeu ${allstats.stat.def} mais defesa acumalada de ${allstats.stat.suplus}, ficando com ${allstats.stat.hp} de vida;`)
				}
				else{
					console.log(`Você Bloqueou o ataque;`)
				}
				allstats.stats.suplus = 0
				allstats.stat.suplus = 0
			}
			else {
				var admg = allstats.stats.atk - allstats.stat.def
				if (admg > 0) {
					allstats.stat.hp = allstats.stat.hp - admg
					console.log(`Seu Inimigo defendeu ${allstats.stat.def} de dano, ficando com ${allstats.stat.hp} de vida`)
				}
				else{
					console.log(`Seu Inimigo Bloqueou o ataque`)
				}
			}	
		}
		else {
			console.log(`Seu Inimigo Bloqueou o ataque`)
		}
	}

	function defdef(coin) {
		if (coin == 0){
			allstats.stats.suplus = [Math.floor(allstats.stats.def / 2)]
			allstats.stat.suplus = [Math.floor(allstats.stat.def / 2)]
			console.log(`Você e seu inimigo concordaram em defender, ambos mantendo escudo para o proximo turno`)
			console.log(`Você manteve ${allstats.stats.suplus}; Seu inimigo manteve ${allstats.stat.suplus}`)
		}
		else {
			allstats.stats.suplus = [Math.floor(allstats.stats.def / 2)]
			allstats.stat.suplus = [Math.floor(allstats.stat.def / 2)]
			console.log(`Você e seu inimigo concordaram em defender, ambos mantendo escudo para o proximo turno`)
			console.log(`Você manteve ${allstats.stats.suplus}; Seu inimigo manteve ${allstats.stat.suplus}`)
		}
	}

	function defatk(coin) {
		if (coin == 0){
			console.log(`Você Bloqueou o ataque;`)
		}
		else {
			if (allstats.stats.suplus !== 0) {
				var s1 = allstats.stats.def + allstats.stats.suplus
				var edmg = allstats.stat.atk - s1
				if (edmg > 0) {
					allstats.stats.hp = allstats.stats.hp - edmg
					console.log(`Você defendeu ${allstats.stats.def} mais defesa acumalada de ${allstats.stats.suplus}, ficando com ${allstats.stats.hp} de vida;`)
				}
				else{
					console.log(`Você Bloqueou o ataque;`)
				}
				allstats.stats.suplus = 0
				allstats.stat.suplus = 0
			}
			else{
				var edmg = allstats.stat.atk - allstats.stats.def
				if (edmg > 0) {
					allstats.stats.hp = allstats.stats.hp - edmg
					console.log(`Você defendeu ${allstats.stats.def}, ficando com ${allstats.stats.hp} de vida;`)
				}
				else{
					console.log(`Você Bloqueou o ataque;`)
				}
			}
		}
	}
	
	function actions(act, eact, coin) {
		allstats.actions++
		if (allstats.actions < 5) {
			console.log(`Ação ${allstats.actions}`)
			rules(act, eact)
		}
		else{
			allstats.actions = 0
			if (coin == 0){
				allstats.coin = 1
				console.log(`Fim do turno, seu inimigo estará com a iniciativa no próximo turno`)
			}
			else{
				allstats.coin = 0
				console.log(`Fim do turno, você estará com a iniciativa no próximo turno`)
			}
		}
	}

	return {
		action,
		battle,
		setstats,
		subscribe
	}
}
