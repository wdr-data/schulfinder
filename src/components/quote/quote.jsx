import React from 'react';
import PropTypes from 'prop-types';

import styles from './quote.module.css';

const Quote = ({
    children,
    author,
  }) => {
    return (
        <blockquote className={styles.quote}>
            {children}
            <p className={styles.author}>
                {author}
            </p>
        </blockquote>
    )
};

Quote.propTypes = {
    children: PropTypes.string,
    author: PropTypes.string,
};

export default Quote;