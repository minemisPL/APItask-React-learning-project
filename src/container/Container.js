import ResultsList from "./resultList/ResultsList";
import PanelList from "./panelList/PanelList";
import "./panelList/panelList.css"
import "./resultList/resultList.css"
import {useEffect, useState} from "react";
import {panelNames} from "../config";
import {getDataFromApi} from "./apiRequestHandler";

const Container = () => {

    const [dataList, setDataList] = useState([])
    const firstPropertyOfPanelNames = Object.entries(panelNames)[0][1]
    const [selectedPanel, setSelectedPanel] = useState(firstPropertyOfPanelNames)
    const [isLoading, setIsLoading] = useState(true)
    const [apiError, setApiError] = useState("")

    useEffect(() => {
        setIsLoading(true)
        setApiError("")
        const fetchData = async () => {
            getDataFromApi(selectedPanel).then((response) => {
                setDataList(response)
                setApiError("")
                setIsLoading(false)
            }).catch(() => {
                setDataList([])
                setApiError("Couldn't receive the data. Try to reload")
                setIsLoading(false)
            })
        }

        fetchData()
    }, [selectedPanel])

    return (
        <div className={"container"}>
            <PanelList
                selectedPanel = { selectedPanel }
                setSelectedPanel= { setSelectedPanel }
            />
            {isLoading && <p>Loading...</p>}
            {apiError && <p style={{color: "red"}}>{apiError}</p>}
            {!isLoading &&
                <ResultsList
                    dataList={ dataList }
                />
            }
        </div>
    );
};

export default Container;