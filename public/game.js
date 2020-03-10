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

		// define a coin que ira decidir que tem a iniciativa no turno
		var coin = 3
		var actions = 0

		// command Recebe coordenadas do clique do mouse
		function action(command){
				const x = command.x
				const y = command.y

				if (x > 118 && x < 218 && y > 418 && y < 518){
						var act = "atk"
						notifyAll(act)
				}
				else if (x > 268 && x < 368 && y > 418 && y < 518){
						var act = "def"
						notifyAll(act)
				}
		}

		function round(stats, stat){
				var random = Math.floor(Math.random() * 10)

				if (actions < 3){
						actions = actions + 1

						if (random <= 4){
								stat.act = ["atk"]
								stat.power = [enemy.atk]
						}
						else{
								stat.act = ["def"]
								stat.power = [enemy.def]
						}

						if (stats.act === "atk"){
								stats.power = [player.atk]
						}
						else{
								stats.power = [player.def]
						}

						battle(stat, stats)

				}
				else{
						console.log(`Ações acabaram`)
				}
		}




		/*function battle(stat, stats) {


				if (coin == 3){
					var aini = stats.ini
					var eini = stat.ini
					if (aini > eini) {
						coin = 0
						console.log(`${aini} e ${eini}; coin ${coin}`)
					}
					else {
						coin = 1
						console.log(`${aini} e ${eini}; coin ${coin}`)
					}
				}

				if (stats.act == "atk" && stat.act == "atk") {
					if (coin == 0) {
						var admg = Math.floor(stats.power / 2)
						var edmg = Math.floor(stat.power / 2)
						stats.hp = stats.hp - edmg
						stat.hp = stat.hp - admg
						console.log(`Você levou ${edmg} de dano e ficou com ${stats.hp} de vida; COIN ${coin}`)
						console.log(`Seu inimigo levou ${admg} de dano e ficou com ${stat.hp} de vida`)
					}
					else {
						var admg = Math.floor(stats.power / 2)
						var edmg = Math.floor(stat.power / 2)
						stats.hp = stats.hp - edmg
						stat.hp = stat.hp - admg
						console.log(`Você levou ${edmg} de dano e ficou com ${stats.hp} de vida; COIN ${coin}`)
						console.log(`Seu inimigo levou ${admg} de dano e ficou com ${stat.hp} de vida`)
					}

				}
				else if (stats.act == "atk" && stat.act == "def") {
					if (coin == 0) {
						var admg = stats.power - stat.power
						if (admg > 0) {
							stat.hp = stat.hp - admg
							console.log(`Seu Inimigo defendeu ${stat.power} de dano, ficando com ${stat.hp} de vida; COIN ${coin}`)
							}
						else{
							console.log(`Seu Inimigo Bloqueou o ataque ; COIN ${coin}`)
						}
					}
					else {
						var admg = stats.power - stat.power
						if (admg > 0) {
							stat.hp = stat.hp - admg
							console.log(`Seu Inimigo defendeu ${stat.power} de dano, ficando com ${stat.hp} de vida; COIN ${coin}`)
							}
						else{
							console.log(`Seu Inimigo Bloqueou o ataque ; COIN ${coin}`)
						}
					}

				}
				else if (stats.act == "def" && stat.act == "def") {
					if (coin == 0) {
						var statsShield = Math.floor(stats.power / 2)
						var statShield = Math.floor(stat.power / 2)
						console.log(`Você e seu inimigo concordaram em defender, ambos mantendo escudo para o proximo turno; COIN ${coin}`)
						console.log(`Você manteve ${statsShield}; Seu inimigo manteve ${statShield}`)
					}
					else{
						var statsShield = Math.floor(stats.power / 2)
						var statShield = Math.floor(stat.power / 2)
						console.log(`Você e seu inimigo concordaram em defender, ambos mantendo escudo para o proximo turno; COIN ${coin}`)
						console.log(`Você manteve ${statsShield}; Seu inimigo manteve ${statShield}`)
					}
				}
				else if (stats.act == "def" && stat.act == "atk") {
					if (coin == 0) {
							if (statsShield !== null) {
								s1 = stats.power + statsShield
								var edmg = stat.power - s1
								if (edmg > 0) {
									stats.hp = stats.hp - edmg
									console.log(`Você defendeu ${stat.power} mais defesa acumalada de ${statsShield}, ficando com ${stats.hp} de vida; COIN ${coin}`)
								}
								else{
									console.log(`Você Bloqueou o ataque; COIN ${coin}`)
								}
								statsShield = null
								statShield = null
							}
							else{
								var edmg = stat.power - stats.power
								if (edmg > 0) {
									stats.hp = stats.hp - edmg
									console.log(`Você defendeu ${stat.power} mais defesa acumalada de ${statsShield}, ficando com ${stats.hp} de vida; COIN ${coin}`)
									}
								else{
									console.log(`Você Bloqueou o ataque; COIN ${coin}`)
								}
							}
					}
					else{
						if (statsShield !== null) {
								s1 = stats.power + statsShield
								var edmg = stat.power - s1
								if (edmg > 0) {
									stats.hp = stats.hp - edmg
									console.log(`Você defendeu ${stat.power} mais defesa acumalada de ${statsShield}, ficando com ${stats.hp} de vida; COIN ${coin}`)
								}
								else{
									console.log(`Você Bloqueou o ataque; COIN ${coin}`)
								}
								statsShield = null
								statShield = null
							}
							else{
								var edmg = stat.power - stats.power
								if (edmg > 0) {
									stats.hp = stats.hp - edmg
									console.log(`Você defendeu ${stat.power} mais defesa acumalada de ${statsShield}, ficando com ${stats.hp} de vida; COIN ${coin}`)
									}
								else{
									console.log(`Você Bloqueou o ataque; COIN ${coin}`)
								}
							}
					}

				}

				if (actions == 3) {
					actions = 0
					console.log(`Round Acabou`)
					if (coin == 0) {
						coin = 1
						console.log(`Seu Inimigo estara com a iniciativa no proximo round ${coin}`)
					}
					else {
						coin = 0
						console.log(`Você estará com a iniciativa no próximo round`)
					}
				}
		}*/

		return {
			action,
			subscribe
		}
}
