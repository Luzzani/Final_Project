import React from "react";

function Labels({ handleTags, filterTags, tags, deleteTag}) {

  return (
    <>
      <label>
        {" "}
        Etiquetas:
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
      </label>
      {tags.length > 0 ? (
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
      ) : (
        <p>No has seleccionado ninguna etiqueta</p>
      )}
    </>
  );
}

export default Labels;
