import React, { useState, useEffect } from 'react';
import '../manage.css';
import Modal from '../../../Common/Modals/Modal';
import AddTutorForm from '../../../Forms/Admin/AddTutorForm';
import { TutorApi, SubjectApi } from 'student_tutor_booking_management_system';

const ManageTutors = () => {
    const [tutors, setTutors] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTutor, setSelectedTutor] = useState(null);

    const tutorApi = new TutorApi();
    const subjectApi = new SubjectApi();

    useEffect(() => {
        // Fetch all tutors when the component mounts
        tutorApi.getAllTutors((error, data) => {
            if (error) {
                console.error('Error fetching tutors:', error);
            } else {
                setTutors(data);
            }
        });

        // Fetch all subjects when the component mounts
        subjectApi.getAllSubject((error, data) => {
            if (error) {
                console.error('Error fetching subjects:', error);
            } else {
                setSubjects(data);
            }
        });
    }, []);

    const handleAddTutor = (newTutor) => {
        if (selectedTutor) {
            // Update an existing tutor
            tutorApi.updateTutor(newTutor, selectedTutor.tutorId, (error, updatedTutor) => {
                if (error) {
                    console.error('Error updating tutor:', error);
                    alert('Error updating tutor. Please check the console for details.');
                } else {
                    setTutors(tutors.map(tutor => (tutor.tutorId === selectedTutor.tutorId ? updatedTutor : tutor)));
                    setIsModalOpen(false);
                    setSelectedTutor(null);
                }
            });
        } else {
            // Add a new tutor
            tutorApi.addTutor(newTutor, (error, addedTutor) => {
                if (error) {
                    console.error('Error adding tutor:', error);
                    alert('Error adding tutor. Please check the console for details.');
                } else {
                    setTutors([...tutors, addedTutor]);
                    setIsModalOpen(false);
                    setSelectedTutor(null);
                }
            });
        }
    };

    const handleDeleteTutor = (tutorId) => {
        tutorApi.deleteTutor(tutorId, (error) => {
            if (error) {
                console.error('Error deleting tutor:', error);
            } else {
                setTutors(tutors.filter(tutor => tutor.tutorId !== tutorId));
            }
        });
    };

    const handleTutorChange = (tutorId) => {
        const tutor = tutors.find(tutor => tutor.tutorId === tutorId);
        setSelectedTutor(tutor);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedTutor(null);
    };

    return (
        <div className='section'>
            <h4 className='sub-header'>Manage Tutors</h4>
            <div className='table-container'>
                {tutors.length > 0 ? (
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Tutor ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Subject</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tutors.map(tutor => (
                                <tr key={tutor.tutorId}>
                                    <td>{tutor.tutorId}</td>
                                    <td>{tutor.name}</td>
                                    <td>{tutor.lastName}</td>
                                    <td>{tutor.phoneNumber}</td>
                                    <td>{tutor.email}</td>
                                    <td>{tutor.subjectName}</td>
                                    <td>
                                        <button className='btn btn-warning' onClick={() => handleTutorChange(tutor.tutorId)}>Edit</button>
                                        <button className='btn btn-danger' onClick={() => handleDeleteTutor(tutor.tutorId)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No tutors available. Add a tutor to get started.</p>
                )}
            </div>
            <div className='button-container'>
                <button className='btn btn-primary' onClick={() => setIsModalOpen(true)}>Add Tutor</button>
            </div>
            {isModalOpen && (
                <Modal 
                    show={isModalOpen} 
                    onClose={handleCloseModal} 
                    FormComponent={AddTutorForm} 
                    formProps={{ 
                        onAddTutor: handleAddTutor,
                        selectedTutor,
                        subjects // Pass subjects to the form
                    }} 
                />
            )}
        </div>
    );
};

export default ManageTutors;
