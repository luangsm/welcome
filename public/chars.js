export default function charset() {

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

        // Inicia as variaves do player e inimigo que ira ter seus stats mudados on demand
        var info = {
            stat: {},
            stats: {},
            coin: []
        }
		

        function setbattle(chars) {
            info.stats.hp = [chars.player.hp]
            info.stats.ini = [chars.player.ini]
            info.stats.atk = [chars.player.atk]
            info.stats.def = [chars.player.def]
            console.log(`Player Iniciado com ${info.stats.hp} de vida, ${info.stats.ini} de iniciativa, ${info.stats.atk} de ataque e ${info.stats.def} de defesa`)
            info.stat.hp = [chars.enemy.hp]
            info.stat.ini = [chars.enemy.ini]
            info.stat.atk = [chars.enemy.atk]
            info.stat.def = [chars.enemy.def]
            console.log(`Inimigo Iniciado com ${info.stat.hp} de vida, ${info.stat.ini} de iniciativa, ${info.stat.atk} de ataque e ${info.stat.def} de defesa`)
            if (info.stats.ini > info.stat.ini) {
                info.coin = 0
                notifyAll(info)
            }
            else {
                info.coin = 1
                notifyAll(info)
            }
            
        }




		return{
            setbattle,
            subscribe
		}
}
