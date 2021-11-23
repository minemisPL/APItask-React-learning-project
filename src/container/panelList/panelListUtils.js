const handleClick = (event) => {
    const panel = event.target.tagName === "DIV"
        ? event.target
        : event.target.parentElement

    handleSelectChange(panel)
}

const handleSelectChange = (panel) => {
    const panels = [...panel.parentElement.children]
    unSelectPanels(panels)
    panel.classList.add("selected")
}

const unSelectPanels = (panels) => {
    if (!panels) {
        return
    }
    panels.forEach(panel => {
        panel.classList.remove("selected")
    })
}

export default handleClick