import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faEdit } from "@fortawesome/free-solid-svg-icons";

function WorkoutList(props) {
    const {items} = props;
    let arrDate = [];
    let arrValues = [];
    items.map(item => {
        arrDate.push(new Date(item.date.split(".")[2], item.date.split(".")[1] - 1, item.date.split(".")[0]))
        arrValues.push(item);
    }
    )
    for (let j = arrDate.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arrDate[i] < arrDate[i + 1]) {
                let temp = arrDate[i];
                arrDate[i] = arrDate[i + 1];
                arrDate[i + 1] = temp;
                let tempAll = arrValues[i];
                arrValues[i] = arrValues[i + 1];
                arrValues[i + 1] = tempAll;
            }
        }
    }
    const handleClickDelete = (val) => {
        props.onDelete(val)
    }
    const handleClickEdit = (val) => {
        props.onEdit(val)
    }
    return (
        <>           
            <div className="container">
                <div className="container-element">
                    <p>Дата (ДД.ММ.ГГ)</p>
                </div>
                <div className="container-element">
                    <p>Пройдено км</p>
                </div>
                <div className="container-element">
                    <p>Действия</p>
                </div>       
            </div>
            <div className="container workoutlist">
                {
                    arrValues.map(item => (
                        <div className="container-block" key={item.id}>
                            <div className="container-element">
                                {item.date}
                            </div>
                            <div className="container-element">
                                {item.distance}
                            </div>
                            <div className="container-element output">
                                <FontAwesomeIcon icon={faEdit} className="icon" onClick={() => handleClickEdit(item)} />
                                <FontAwesomeIcon icon={faTimesCircle} className="icon" onClick={() => handleClickDelete(item.id)} />
                            </div>
                        </div>   
                    ))
                }
            </div>
        </>
    )
}

export default WorkoutList