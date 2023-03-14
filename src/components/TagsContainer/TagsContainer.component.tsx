import {useSelector} from "react-redux";
import Button from "../Button";
import "./TagsContainer.css";
import "../Button/Button.css"

const TagsContainer = ({onRemove}: { onRemove: (id: number) => void }) => {
    return <div className="tags-container">
        {useSelector((state: { list: string[] }) => state.list)?.map((item: string, index: number) =>
            <Button isTag key={`${item}-${index}`} onClick={() => onRemove(index)} title={item}/>)}
    </div>
};

export default TagsContainer;
