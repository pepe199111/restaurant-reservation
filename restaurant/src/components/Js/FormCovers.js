import React, { useContext } from 'react';

import { BookingContext } from '../../context/BookingContext';

const BookingReservationCovers = () => {
  const {
    coversAmount,
    increaseCovers,
    decreaseCovers
  } = useContext(BookingContext);

  return (
    <>
      <div className="form__details">
        <span className="form__label">Covers</span>
        <span className="form__info">
          {coversAmount}
        </span>
        <div className="form__option">
          {coversAmount <= 1 ?
            <span
              disabled={true}
              class="fas fa-minus-circle disabled" />
            :
            <span
              class="fas fa-minus-circle"
              onClick={decreaseCovers} />
          }
          <span class="fas fa-plus-circle" onClick={increaseCovers} />
        </div>
      </div>
    </>
  )
}


export default BookingReservationCovers;