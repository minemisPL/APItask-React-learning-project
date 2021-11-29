import ResultListItem from "./resultListItem/ResultListItem";
import "./resultListItem/resultListItem.css"

const ResultsList = ({ dataList }) => {

    const headerList = []

    Object.keys(dataList[0]).forEach(prop => {
        headerList.push(
            <td className={"headers"}>{prop}</td>
        )
    })

    return (
        <ul className={"resultList"}>
            {headerList}
            {dataList.map((item) => (
                <ResultListItem
                    key={item.id}
                    item={item}
                />))}
        </ul>
    );
};

export default ResultsList;