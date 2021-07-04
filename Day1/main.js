const panels = document.querySelectorAll('.panel')

console.log(panels)

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        remodAtiveClass()
        panel.classList.add('active')
    })
})

function remodAtiveClass () {
    panels.forEach(panel => { 
        panel.classList.remove('active')
    })
}