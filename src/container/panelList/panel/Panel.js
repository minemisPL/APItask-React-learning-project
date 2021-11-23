const Panel = ({ className, name, setSelectedPanel }) => {
    return (
        <div
            className={`panel ${className}`}
            onClick={() => setSelectedPanel(name)}>
            <p>{name}</p>
        </div>
    );
};

export default Panel;