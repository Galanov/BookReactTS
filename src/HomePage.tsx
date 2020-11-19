
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { PrimaryButton } from "./Styles";
import { QuestionList } from "./QuestionList";
import { getUnansweredQuestions, QuestionData } from "./QuestionsDate";
import { Page } from "./Page";
import { PageTitle } from "./PageTitle";
import {useEffect, useState} from 'react';

export const HomePage = () => {
    const [questions,setQuestions] = useState<QuestionData[]|null>(null);
    const [questionsLoading, setQuestionsLoading] = useState(true);

    useEffect(()=>{
        const doGetUnansweredQuestions = async () =>{
        const unansweredQuestions = await getUnansweredQuestions();
        setQuestions(unansweredQuestions);
        setQuestionsLoading(false);
        }
        doGetUnansweredQuestions();
    },[]);
    console.log('rendered');
    return (
    <Page>
        <div
            css={css`
                display: flex;
                align-items: center;
                justify-content: space-between;
            `}
        >
            <h2
                css={css`
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                `}
            >
                <PageTitle>Unanswered Questions</PageTitle>
            </h2>
            <PrimaryButton>Ask a question</PrimaryButton>
        </div>
        {questionsLoading ? (
            <div
                css={css`
                    font-size: 16px;
                    font-style: italic;
                `}
            >
                Loading...
            </div>
        ):(
            <QuestionList data={questions || []} />
        )}
    </Page>
);
    };

const renderQuestion = (question: QuestionData) =>
    <div>{question.title}</div>