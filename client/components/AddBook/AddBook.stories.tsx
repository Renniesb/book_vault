import React from 'react';
import { Meta } from '@storybook/react';
import AddBook from './AddBook';

export default {
    title: 'AddBook',
    component: AddBook,
} as Meta;


interface AddBookProps {
    onSubmit: () => void;
}

const Template = () => <AddBook />;

export const Default = Template;