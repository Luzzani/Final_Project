import React from "react";
import { useSelector } from "react-redux";


export default function Tags({callback, tags}){

    const filterTags = useSelector((state) => state.productsReducer.filterTags);

    const handleTags = (e) => {
        if (tags.indexOf(Number(e.target.value)) === -1)
          callback([...tags, Number(e.target.value)]);
          
      };

    const deleteTag = (e) => {
        let aux = tags;
        aux.splice(tags.indexOf(Number(e.target.value)), 1);
       callback([...aux]);
      };



    return(
        <div>
            <label> Etiquetas </label>
            <select
                name="Tags"
                value={0}
                onChange={(e) => {
                handleTags(e);
                }}
            >
                <option value={0}> selecciona etiquetas </option>
                {filterTags?.map((tag) => {
                return (
                    <option key={tag.id} value={tag.id}>
                    {tag.name}
                    </option>
                );
                })}
            </select>
            {tags.length > 0 ? (
                <div>
                <ul>
                    {tags?.map((tagId) => {
                    return (
                        <li
                        key={tagId}
                        value={tagId}
                        onClick={(e) => {
                            deleteTag(e);
                        }}
                        >
                        {filterTags.find((t) => t.id === Number(tagId)).name} ❌
                        </li>
                    );
                    })}
                </ul>
                </div>
            ) : (
                <p>no hay etiquetas aún</p>
            )}
        </div>
    )
}