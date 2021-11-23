import ResultListItem from "./resultListItem/ResultListItem";

const ResultsList = ({ dataList }) => {
    return (
        <ul className={"resultList"}>
            {dataList.map((item) => (
                <ResultListItem
                    key={item.id}
                    item={item}
                />))}
        </ul>
    );
};

export default ResultsList;