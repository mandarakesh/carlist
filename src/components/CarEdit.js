import { useDispatch } from "react-redux"
import { Field, Form, Formik } from "formik"
import { editCar } from "../store/slices/carsSlice"


function CarEdit({ setEdit, data }) {
    const handleEdit = () => {
        setEdit(false)
    }
    const dispatch = useDispatch()
    return (

        <div className="edit-car">
            <center><p>Update</p></center>
            <Formik
                initialValues={data}
                onSubmit={values => {
                    dispatch(editCar(values))
                    setEdit(false)
                }}
            >
                <Form>
                    <div className="field-container">

                        <label className="label">Name :</label>
                        <Field name="name" required className='input is-expanded' />
                    </div>
                    <label className="label">Price :</label>
                    <Field name="cost" required className='input is-expanded' />
                    <div className="button-container">
                        <button type="submit" className="button is-success mr-2" >updated</button>
                        <button type="button" onClick={handleEdit} className="button is-danger">close</button>
                    </div>
                </Form>
            </Formik>
            <div>
            </div>
        </div>
    )
}

export default CarEdit