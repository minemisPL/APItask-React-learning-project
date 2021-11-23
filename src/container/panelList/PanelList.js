import Panel from "./panel/Panel";
import "./panel/panel.css";
import {panelNames} from "../../config";
import React, {useEffect} from "react";

const PanelList = ({ selectedPanel, setSelectedPanel }) => {

    const makePanels = (panelNames) => {
        const panels = []
        for (const [key, panelName] of Object.entries(panelNames)) {
            panels.push(
                <Panel
                    key={key}
                    className={panelName === selectedPanel ? "selected" : ""}
                    name={panelName}
                    setSelectedPanel ={ setSelectedPanel }
                />
            )
        }
        return panels
    }

    const panels = makePanels(panelNames)

    useEffect(() => {
        panels[0] = React.cloneElement(
            panels[0],
            {className: "selected"}
        )
    })

    return (
        <div className={"panelList"}>
            {panels}
        </div>
    );
};

export default PanelList;