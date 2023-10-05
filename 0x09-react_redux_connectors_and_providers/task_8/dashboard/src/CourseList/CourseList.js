import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { fetchCourses, selectCourse, unSelectCourse } from './courseActionCreators';
import { getListCourses } from './selectors/courseSelectors';
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

const CourseList = ({ listCourses, fetchCourses, selectCourse, unSelectCourse }) => {
    useEffect(() => {
        // Fetch courses when the component mounts
        fetchCourses();
    }, [fetchCourses]);

    const onChangeRow = (id, checked) => {
        if (checked) {
            selectCourse(id);
        } else {
            // Call unSelectCourse action creator when row is unchecked
            unSelectCourse(id);
        }
    };

    return (
        <div className={css(styles.contain)}>
            <table className={css(styles.courseListstyles)}>
                <thead className='thead'>
                    <CourseListRow textFirstCell="Available courses" isHeader={true} />
                    <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
                </thead>
                <tbody className='tbody'>
                    {listCourses.length === 0 ? <CourseListRow textFirstCell="No course available yet" isHeader={false} /> :
                        listCourses.map((course) => (
                            <CourseListRow
                                key={course.id}
                                textFirstCell={course.name}
                                textSecondCell={course.credit}
                                isHeader={false}
                                onChange={(checked) => onChangeRow(course.id, checked)}
                            />
                        ))}
                </tbody>
            </table>
        </div>
    );
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
    fetchCourses: PropTypes.func.isRequired,
    selectCourse: PropTypes.func.isRequired,
    unSelectCourse: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    listCourses: getListCourses(state),
});

export default connect(mapStateToProps, { fetchCourses, selectCourse, unSelectCourse })(CourseList);
