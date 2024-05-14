import React, { useState } from "react";
import PropTypes from "prop-types";
import Paper from "../Paper/Paper";
import styles from "./Tutors.module.css";
import { nanoid } from "nanoid";

const Tutors = ({ tutors }) => {
  const [showForm, setShowForm] = useState(false);
  const [tutorsData, setTutorsData] = useState(tutors);

  const renderTutorPapers = () =>
    tutorsData.map((tutor) => {
      const id = nanoid();
      return (
        <Paper key={id}>
          <div className={styles.tutorsContainer}>
            <div className={styles.tutorName}>
              <p>{tutor.firstName}</p>
              <p>{tutor.LastName}</p>
            </div>
            <div className={styles.tutorContact}>
              <p>{tutor.phone}</p>
              <p>{tutor.email}</p>
              <p>{tutor.city}</p>
            </div>
            <p>{tutor.options}</p>
          </div>
        </Paper>
      );
    });

  const handleFormSubmit = (abstractData) =>
    setTutorsData({ ...tutorsData, abstractData });

  const renderAddNewTutorForm = () => (
    <form>
      <input
        type="text"
        name="firstName"
        id="firstname"
        placeholder="First Name"
      />
      <input
        type="type"
        name="lastName"
        id="lastName"
        placeholder="Last Name"
      />
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="Phone Number"
        pattern="0-9]{3}-[0-9]{3}-[0-9]{4}"
        required
      />
      <input type="email" name="email" id="email" placeholder="Email" />
      <input type="text" name="city" id="city" placeholder="City" />
      <button onClick={handleFormSubmit}>Invite</button>
    </form>
  );
  const handleAddtutorButton = setShowForm;

  return (
    <div className={styles.wrapper}>
      {renderTutorPapers()}
      {showForm ? (
        renderAddNewTutorForm()
      ) : (
        <button onClick={() => setShowForm(true)}>Add Tutor</button>
      )}
    </div>
  );
};

Tutors.propTypes = {
  tutors: PropTypes.arrayOf(PropTypes.object),
};

export default Tutors;
