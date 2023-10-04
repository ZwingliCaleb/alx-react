import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    courseListstyles: {
        width: "50%",
        border: '1px solid black',
        margin: '1rem 2rem',
        padding: '0.2rem'
    },
    contain: {
        height: '45vh',
        borderBottom: '1px solid rgb(217, 37, 37)'
    }
});

const CourseList = ({listCourses}) => {
    return (
        <div className = {css(styles.contain)}>
        <table className = {css(styles.courseListstyles)}>
            <thead className = 'thead'>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody className='tbody'>
                {listCourses.length === 0 ? <CourseListRow textFirstCell="No course available yet" isHeader={false} /> : listCourses.map((course) => <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />)}
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
