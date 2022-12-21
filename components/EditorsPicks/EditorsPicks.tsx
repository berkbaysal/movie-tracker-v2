import React from 'react';
import EditorsPicksUnit from '../elements/EditorsPickUnit/EditorsPicksUnit';
import { EditorsPick } from '../../util/interfacesApp';

interface EditorsPicksProps {
  editorsPicks: EditorsPick[];
}

function EditorsPicks({ editorsPicks }: EditorsPicksProps) {
  const editorsPicksList = editorsPicks.map((pick) => (
    <li className="col col--xs-6 col--lg-3">
      <EditorsPicksUnit
        title={pick.title}
        posterPath={pick.posterPath}
        year={pick.year}
        id={pick.id}
      />
    </li>
  ));
  return (
    <div className="c-editors-picks fluid-container">
      <div className="container">
        <ul className="row">{editorsPicksList}</ul>
      </div>
    </div>
  );
}

export default EditorsPicks;
