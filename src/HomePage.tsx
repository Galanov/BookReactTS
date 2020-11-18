//import React from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { PrimaryButton } from "./Styles";
import { QuestionList } from "./QuestionList";
import { getUnansweredQuestions } from "./QuestionsDate";
import { Page } from "./Page";
import { PageTitle } from "./PageTitle";

export const HomePage = () => (
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
        <QuestionList data={getUnansweredQuestions()}/>
    </Page>
);