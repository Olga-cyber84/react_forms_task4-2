import React, {useState} from 'react';
import WorkoutAddBlock from './WorkoutAddBlock';
import WorkoutList from './WorkoutList';
import WorkoutModel from '../models/WorkoutModel';
import {nanoid} from 'nanoid';


function WorkoutBlock(props) {
    const [items, setItem] = useState([]);
    const [editItem, setEdit] = useState([]);
    const handleAdd = item => {
        setItem(prevItems => {
            const updItems = prevItems.filter(prev => prev.date === item.date)
            if (!updItems.length) {
                return [...prevItems, item];
            }
            const uniqItems = prevItems.filter(prev => prev.date !== item.date)
            const updatedItem = new WorkoutModel(nanoid(), updItems[0].date, updItems[0].distance + item.distance);
            return [...uniqItems, updatedItem]
        }   
        )
    }
    const handleDelete = (id) => {
        setItem(() => items.filter(item => item.id !== id))          
    }
    const handleEdit = (item) => {
        console.log("ID для корр", item)
        setEdit(() => item)
        setItem(prevItems => prevItems.filter(prev => prev.date !== item.date))
    }
    const handleClear = () => {
        setEdit(() => [])
    }

    return (
        <>
            <WorkoutAddBlock
                onAdd={handleAdd}
                onEditItem={editItem}
                onClear={handleClear}/>
            <WorkoutList
                items={items}
                onDelete={handleDelete}
                onEdit={handleEdit}/>
        </>
    )
}

export default WorkoutBlock