import React, {useRef} from 'react';
import {nanoid} from 'nanoid';
import WorkoutModel from '../models/WorkoutModel';

function WorkoutAddBlock(props) {    
    const workoutDateValue = useRef();
    const workoutDistanceValue = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        const workoutDate = workoutDateValue.current.value;
        const workoutDistance = Number(workoutDistanceValue.current.value);
        if (workoutDate && workoutDistance) {
            const workoutItem = new WorkoutModel(nanoid(), workoutDate, workoutDistance)
            props.onAdd(workoutItem);
            workoutDateValue.current.value = '';
            workoutDistanceValue.current.value = '';
            props.onClear();
        }   
    }

    if (props.onEditItem.date) {
        workoutDateValue.current.value = props.onEditItem.date;
        workoutDistanceValue.current.value = props.onEditItem.distance;
    }
 
    return (
        <form onSubmit={handleSubmit} className="container">
            <div className="container-element">
                <p>Дата (ДД.ММ.ГГ)</p>
                <p><input
                        type="text"
                        name="workoutDate"
                        ref={workoutDateValue}
                        autoComplete="off"
                    />
                </p>
            </div>
            <div className="container-element">
                <p>Пройдено км</p>
                <p><input
                        type="text"
                        name="workoutDistance"
                        ref={workoutDistanceValue}
                        autoComplete="off"
                    />
                </p>
            </div>
            <div className="container-element">
                <p><input type="submit" value="OK"/></p>
            </div>  
        </form>
    )
    
}

export default WorkoutAddBlock