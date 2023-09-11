import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape'

const CourseList = () => {
    return (
        <div className="contain">
        <table id = 'CourseList'>
            <thead className = 'thead'>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody className='tbody'>
                <CourseListRow textFirstCell="ES6" textSecondCell={60} isHeader={false} />
                <CourseListRow textFirstCell="Webpack" textSecondCell={20} isHeader={false} />
                <CourseListRow textFirstCell="React" textSecondCell={40} isHeader={false} />
            </tbody>
        </table>
    </div>
    );
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.propTypes = {
    listCourses: [],
}

export default CourseList;
