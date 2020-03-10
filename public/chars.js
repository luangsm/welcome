export default function charset() {

		const player = {
				atk: 10,
				def: 7,
				hp: 20,
				ini: 14
		}

		const enemy = {
				atk: 8,
				def: 8,
				hp: 15,
				ini: 10
		}

		// Inicia as variaves do player e inimigo que ira ter seus stats mudados on demand
		var stat = {}
		var stats = {}
		stats.hp = [player.hp]
		stats.ini = [player.ini]
		stat.hp = [enemy.hp]
		stat.ini = [enemy.ini]


		function setact(act) {
			if (act == "atk") {
				stats.act = [act]
				stats.atk = [player.atk]
				console.log(`Ação ${act}, causa ${stats.atk} de dano`)
			}
			else{
				stats.act = [act]
				stats.def = [player.def]
				console.log(`Ação ${act}, defende ${stats.def} de dano`)
			}
		}


		return{
			setact
		}
}
