import React from 'react';
import ListItem from './ListItem'
import { ReactComponent as Spelling } from "../../assets/images/spelling.svg";
import { ReactComponent as Grammer } from "../../assets/images/grammer.svg";
import { ReactComponent as Punctuation } from "../../assets/images/punctuation.svg";
import { ReactComponent as Conciseness } from "../../assets/images/conciseness.svg";

function FreeList(props) {
    return (
        <>
        <ListItem
            copy="Spelling"
            isModel={true}
            modelImage={<Spelling />}
            modelCopy="Eliminate spelling errors."
          />

          <ListItem
            copy="Grammer"
            isModel={true}
            modelImage={<Grammer />}
            modelCopy="Eliminate spelling errors."
          />
          <ListItem
            copy="Punctuation"
            isModel={true}
            modelImage={<Punctuation />}
            modelCopy="Eliminate spelling errors."
          />
          <ListItem
            copy="Conciseness"
            isModel={true}
            modelImage={<Conciseness />}
            modelCopy="Eliminate spelling errors."
          /> 
        </>
    );
}

export default FreeList;