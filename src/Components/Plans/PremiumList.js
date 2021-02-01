import React from 'react';
import ListItem from './ListItem'
import { ReactComponent as Spelling } from "../../assets/images/spelling.svg";
import { ReactComponent as Grammer } from "../../assets/images/grammer.svg";
import { ReactComponent as Punctuation } from "../../assets/images/punctuation.svg";
import { ReactComponent as Conciseness } from "../../assets/images/conciseness.svg";

import { ReactComponent as PremiumOne } from "../../assets/images/premiumOne.svg";
import { ReactComponent as PremiumTwo } from "../../assets/images/premiumTwo.svg";
import { ReactComponent as PremiumThree } from "../../assets/images/premiumThree.svg";
import { ReactComponent as PremiumFour } from "../../assets/images/premiumFour.svg";
import { ReactComponent as PremiumFive } from "../../assets/images/premiumFive.svg";

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
            modelImage={<PremiumOne />}
            isModel={true}
            modelCopy="Automatically rewrite hard-to-read sentences."
          />
          <ListItem
            copy="Tone adjustments"
            isModel={true}
            modelImage={<PremiumTwo />}
            modelCopy="Eliminate spelling errors."
          />
          <ListItem
            copy="Plagiarism detection"
            isModel={true}
            modelCopy="Eliminate spelling errors."
          />
        <ListItem
            copy="Word choice"
            isModel={true}
            modelImage={<PremiumThree />}
            modelCopy="Eliminate spelling errors."
          />

        <ListItem
            copy="Formality level"
            isModel={true}
            modelImage={<PremiumFour />}
            modelCopy="Write with the appropriate tone, even when you're in a hurry."
          />


        <ListItem
            copy="Fluency"
            isModel={true}
            modelImage={<PremiumFive />}
            modelCopy="Ensure your word choices sound natural and fluent."
          />


        <ListItem
            copy="Additional advanced suggestions"
            isModel={true}
            modelCopy="Fix inconsistencies in spelling and punctuation, adjust the tone of your writing, and get additional advanced feedback."
          />

          
        </>
    );
}

export default PremiumList;