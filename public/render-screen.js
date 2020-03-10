export default function renderScreen(screen, requestAnimationFrame) {
    const ctx = screen.getContext('2d')
    ctx.fillStyle = 'white'
    ctx.clearRect(0, 0, 1200, 600)

		ctx.fillStyle = 'red'
		ctx.fillRect(100, 400, 100, 100)

		ctx.fillStyle = 'blue'
		ctx.fillRect(250, 400, 100, 100)

		const sword = new Image()
 	 	sword.src = 'img/sword.png'
		ctx.drawImage(sword, 118, 418)

		const shield = new Image()
 	 	shield.src = 'img/shield.png'
  	ctx.drawImage(shield, 268, 418)

    requestAnimationFrame(() => {
        renderScreen(screen, requestAnimationFrame)
    })
}
