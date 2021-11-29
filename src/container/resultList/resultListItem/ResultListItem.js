const ResultListItem = ({ item }) => {
    const tdList = []

    Object.entries(item).forEach(([, value]) => {
         tdList.push(
             <td>{JSON.stringify(value)}</td>
         )
    })

    return (
        <tr>
            {tdList}
        </tr>
    );
};

export default ResultListItem;