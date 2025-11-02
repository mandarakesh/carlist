import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";
import CarEdit from "./CarEdit";
import { useState } from "react";
import Modal from "./Modal";

function CarList() {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [data, setData] = useState([])
    const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
        const filteredCars = data.filter((car) =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        return {
            cars: filteredCars,
            name: form.name
        }
    })

    const handleEdit = (car) => {
        setData(car)
        setEdit(true)
    }

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id))
    }
    const renderedCars = cars.map((car) => {
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <div>

                    <button className="button is-success mr-2" onClick={() => handleEdit(car)}>Edit</button>
                    <button className="button is-danger" onClick={() => handleCarDelete(car)}>
                        Delete
                    </button>
                </div>
                {edit && <Modal>
                    <CarEdit data={data} setEdit={setEdit} />
                </Modal>
                }
            </div>
        )
    })
    return <div className="car-list">{renderedCars}
        <hr />
    </div>
}

export default CarList