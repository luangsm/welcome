export default function createMouseListener(document) {

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


		function MousePos(event) {
				const cX = event.clientX
				const cY = event.clientY

				const command = {
						type: 'click',
						x: cX,
						y: cY
				}
				notifyAll(command)
		}

		document.addEventListener("click", MousePos);

		return {
				MousePos,
				subscribe
		}
}

