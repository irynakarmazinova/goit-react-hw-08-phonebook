import React from 'react';
import PropTypes from 'prop-types';
import s from './title.module.scss';

const Title = ({ title }) => <h1 className={s.title}>{title}</h1>;
export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
