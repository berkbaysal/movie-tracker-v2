import React from 'react';
import EditorsPicksUnit from '../elements/EditorsPickUnit/EditorsPicksUnit';
import { EditorsPick } from '../../util/interfacesApp';

interface EditorsPicksProps {
  editorsPicks: EditorsPick[];
}

function EditorsPicks({ editorsPicks }: EditorsPicksProps) {
  const editorsPicksList = editorsPicks.map((pick) => (
    <li className="col col--xs-6 col--lg-3" key={pick.id}>
      <EditorsPicksUnit
        title={pick.title}
        posterPath={pick.posterPath}
        year={pick.year}
        id={pick.id}
      />
    </li>
  ));
  return (
    <section
      aria-label="Editors Picks"
      className="c-editors-picks container-fluid o-background-container"
    >
      <div className="container">
        <div className="row">
          <h2 className="col o-homepage-section-title">
            Handpicked by our editors
          </h2>
        </div>
        <ul className="row  c-editors-picks__content-list">
          {editorsPicksList}
        </ul>
      </div>
    </section>
  );
}

export default EditorsPicks;
