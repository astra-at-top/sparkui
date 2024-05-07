import robot2 from "../../assets/Robot1.png"
import * as Dialog from "@radix-ui/react-dialog"
import * as yup from "yup"
import {useFormik} from "formik"
function Loginform() {
    let loginSchema = yup.object({
        email : yup.string().email().required(),
        password : yup.string().required().min(6),
        confirmPassword : yup.string().required().oneOf([yup.ref('password'), null]).min(6)
    })
    
    let {values, touched, errors, handleChange, handleBlur} = useFormik({
        initialValues : {
            email:"",
            password : "",
            confirmPassword : ""
        },
        validationSchema : loginSchema
    })

    return (<>
         <div className="grid lg:grid-cols-2 border border-gray-300 p-4 rounded-lg mt-5">
                            <div className="lg:grid-span-1 flex justify-center flex-col gap-1 ">
                                <div className="flex flex-col">
                                    <label className="font-semibold text-sm text-gray-600">Email</label>
                                    <input onChange={handleChange} onBlur={handleBlur} value={values.email} name="email" className={touched.email && errors.email ? "border py-1 border-red-500 rounded-md":"border py-1 rounded-md"} />
                                    {touched.email && errors.email && <div className="text-sm text-red-600 font-semibold">{errors.email}</div>}
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-semibold text-sm text-gray-600">Password</label>
                                    <input value={values.password} onChange={handleChange} onBlur={handleBlur} name="password" className={touched.password && errors.password ? "border py-1 border-red-500 rounded-md":"border py-1 rounded-md"} />
                                    {touched.password && errors.password && <div className="text-sm text-red-600 font-semibold">{errors.password}</div>}
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-semibold text-sm text-gray-600">Confirm Password</label>
                                    <input name="confirmPassword" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur}  className={touched.confirmPassword && errors.confirmPassword ? "border py-1 border-red-500 rounded-md":"border py-1 rounded-md"} />
                                    {touched.confirmPassword && errors.confirmPassword && <div className="text-sm text-red-600 font-semibold">{errors.confirmPassword}</div>}
                                </div>
                                <Dialog.Close className="me-auto mt-5">
                                    <button className="border py-1 px-3 border-gray-500 rounded-lg p-0 " >
                                        Login
                                    </button>
                                </Dialog.Close>
                            </div>
                            <div className="grid-span-1 hidden lg:block">
                                <img src={robot2} className="h-full w-full" />
                            </div>
                        </div>
    </>)
}

export {Loginform}