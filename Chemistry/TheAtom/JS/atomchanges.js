window.addEventListener('load', () => {
    kripton = new Atom(14)

    function renderElectronicLayers(selector, atom) {
        const element = document.querySelector(selector)
        const html = document.createElement('div')

        for (const index in atom.electronicDiagram) {
            const layer = atom.electronicDiagram[index]
            const layerLength = atom.shells[index]
            const electrosphere = document.createElement('div')

            electrosphere.classList.add('electrosphere', `layer-${index}`)

            if (layerLength)
                electrosphere.style.setProperty('--length', layerLength)
            else
                electrosphere.classList.add('empty-layer')

            for (let i = 0; i < layerLength; i++) {
                const electron = document.createElement('div')

                electron.classList.add('electron')
                electron.style.setProperty('--index', i)
                electrosphere.appendChild(electron)
            }

            html.appendChild(electrosphere)
        }

        element.innerHTML = html.innerHTML
    }

    renderElectronicLayers("#Atom .electrospheres", kripton)
})