import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  firstRowColor: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRowColor: {
    backgroundColor: '#de5b545',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <tr
      className={css(
        isHeader ? styles.headerRowColor : styles.firstRowColor,
        isChecked && !isHeader && styles.rowChecked // Apply rowChecked style if checked
      )}
    >
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>
            {isHeader ? (
              textFirstCell
            ) : (
              <input
                type="checkbox"
                onChange={handleCheckboxChange}
                checked={isChecked}
              />
            )}
          </td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isHeader: PropTypes.bool,
};

export default CourseListRow;