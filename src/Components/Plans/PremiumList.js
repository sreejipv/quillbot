import React from 'react';
import ListItem from './ListItem'
import { ReactComponent as Spelling } from "../../assets/images/spelling.svg";
import { ReactComponent as Grammer } from "../../assets/images/grammer.svg";
import { ReactComponent as Punctuation } from "../../assets/images/punctuation.svg";
import { ReactComponent as Conciseness } from "../../assets/images/conciseness.svg";
function PremiumList(props) {
    return (
        <>
        
        <ListItem
            copy="Everything in Free"
            fw="600"
            isModel={false}
          />
          <ListItem
            copy="Clarity-focused sentence rewrites"
            modelImage={<Grammer />}
            isModel={true}
            modelCopy="Eliminate spelling errors."
          />
          <ListItem
            copy="Tone adjustments"
            isModel={true}
            modelImage={<Punctuation />}
            modelCopy="Eliminate spelling errors."
          />
          <ListItem
            copy="Plagiarism detection"
            isModel={true}
            modelImage={<Conciseness />}
            modelCopy="Eliminate spelling errors."
          />
        <ListItem
            copy="Plagiarism detection"
            isModel={true}
            modelImage={<Conciseness />}
            modelCopy="Eliminate spelling errors."
          />

        <ListItem
            copy="Word choice"
            isModel={true}
            modelImage={<Conciseness />}
            modelCopy="Eliminate spelling errors."
          />

        <ListItem
            copy="Formality level"
            isModel={true}
            modelImage={<Conciseness />}
            modelCopy="Eliminate spelling errors."
          />

        <ListItem
            copy="Fluency"
            isModel={true}
            modelImage={<Conciseness />}
            modelCopy="Eliminate spelling errors."
          />
          <ListItem
            copy="Additional advanced suggestions"
            isModel={true}
            modelImage={<Conciseness />}
            modelCopy="Additional advanced suggestions"
          />
          
        </>
    );
}

export default PremiumList;