import { createSlice, nanoid } from "@reduxjs/toolkit";


const carsSlice=createSlice({
    name:"cars",
    initialState:{
        searchTerm:"",
        data:[]
    },
    reducers:{
        changeSearchTerm(state,action){
            state.searchTerm=action.payload
        },
        addCar(state,action){
            state.data.push({
                name:action.payload.name,
                cost: action.payload.cost,
                id:nanoid()
            })
        },
        removeCar(state,action){
            const updated = state.data.filter((car)=>{
                return car.id!==action.payload
            })
            state.data=updated
        },
        editCar(state,action){
            const updated=state.data.map((car)=>{
                if(car.id===action.payload.id){
                    return action.payload
                }else{
                    return car
                }
            })
            state.data=updated
        }

    }
})

export const {changeSearchTerm,addCar,removeCar,editCar}=carsSlice.actions
export const carReducer=carsSlice.reducer