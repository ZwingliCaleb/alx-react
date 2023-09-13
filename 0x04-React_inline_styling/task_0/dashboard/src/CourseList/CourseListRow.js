import React from 'react';
import './CourseList.css';
import PropTypes from 'prop-types'

const rowColor = { backgroundColor: '#f5f5f5ab' };
const headerRowColor = { backgroundColor: '#deb5b545' };

const CourseListRow = ({ isHeader=false, textFirstCell, textSecondCell=null }) => {
  const rowStyle = isHeader ? headerRowColor : rowColor;
   return (
    <tr style = {rowStyle}>
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
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
   )
};

CourseListRow.propTypes = {
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  isHeader: PropTypes.bool,
}

export default CourseListRow;