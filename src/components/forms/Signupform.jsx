import robot2 from "../../assets/Robot1.png"
import * as Dialog from "@radix-ui/react-dialog"
import * as yup from "yup"
import { useFormik } from "formik"
import { postFunction } from "../../axios/axios"
function Signupform() {
    let signupSchema = yup.object({
        firstname : yup.string().required(),
        lastname : yup.string().required(),
        email : yup.string().email().required(),
        password : yup.string().required().min(6),
        confirmPassword : yup.string().required().min(6).oneOf([yup.ref('password'),null])
    })
    let {touched, errors, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues : {
           
                firstname : "",
                lastname : "",
                email :"",
                password : "",
                confirmPassword : ""
    },
    validationSchema : signupSchema,
    onSubmit :async (values, action) => {
        let req = await postFunction("/signup", values)
        if(req.status === 400){
            
        }
        console.log(req.status)
        console.log(req,"reqq")
    }
})
    return (<>
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 border border-gray-300 p-4 rounded-lg mt-5">
                            <div className="lg:grid-span-1 ">
                                <div className="flex flex-col">
                                    <label className="font-semibold text-sm text-gray-600">First Name</label>
                                    <input name="firstname" onChange={handleChange} onBlur={handleBlur} className={
                                        errors.firstname && touched.firstname ? "border border-red-400 py-1 rounded-md" : "border py-1 rounded-md"
                                    } />
                                    {errors.firstname && touched.firstname && <div className="text-sm text-red-500 font-semibold">
                                        {errors.firstname}
                                        </div>}
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-semibold text-sm text-gray-600">Last Name</label>
                                    <input name="lastname" onChange={handleChange} onBlur={handleBlur} className={
                                        errors.lastname && touched.lastname ? "border border-red-400 py-1 rounded-md" : "border py-1 rounded-md"
                                    } />
                                    {errors.lastname && touched.lastname && <div className="text-sm text-red-500 font-semibold">
                                        {errors.lastname}
                                        </div>}
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-semibold text-sm text-gray-600">Email</label>
                                    <input name="email" onChange={handleChange} onBlur={handleBlur} className={
                                        errors.email && touched.email ? "border border-red-400 py-1 rounded-md" : "border py-1 rounded-md"
                                    } />
                                    {errors.email && touched.email && <div className="text-sm text-red-500 font-semibold">
                                        {errors.email}
                                        </div>}
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-semibold text-sm text-gray-600">Password</label>
                                    <input name="password" onChange={handleChange} onBlur={handleBlur} className={
                                        errors.password && touched.password ? "border border-red-400 py-1 rounded-md" : "border py-1 rounded-md"
                                    } />
                                    {errors.password && touched.password && <div className="text-sm text-red-500 font-semibold">
                                        {errors.password}
                                        </div>}
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-semibold text-sm text-gray-600">Confirm Password</label>
                                    <input name="confirmPassword" onChange={handleChange} onBlur={handleBlur} className={
                                        errors.confirmPassword && touched.confirmPassword ? "border border-red-400 py-1 rounded-md" : "border py-1 rounded-md"
                                    } />
                                    {errors.confirmPassword && touched.confirmPassword && <div className="text-sm text-red-500 font-semibold">
                                        {errors.confirmPassword}
                                        </div>}
                                    
                                </div>
                                {/* <Dialog.Close className=" mt-5"> */}
                                    <button className="border mt-5 py-1 px-3 border-gray-500 rounded-lg p-0 " >
                                        Signup
                                    </button>
                                {/* </Dialog.Close> */}
                            </div>
                            <div className="grid-span-1 hidden lg:block">
                                <img src={robot2} className="h-full w-full" />
                            </div>
                        </form>
    </>)
}

export {Signupform}