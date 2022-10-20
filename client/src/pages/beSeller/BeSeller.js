import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import ModalAlart from "../../components/ui/ModalAlart";
import { useRoleChangeMutation } from "../../features/auth/authApi";

export default function BeSeller(){
    const [checkBoxOne,setCheckBoxOne] = useState(false)
    const [checkBoxTwo,setCheckBoxTwo] = useState(false)
    const [open,setOpen] = useState(false)
    // const [errMessage,setErrMessage] = useState('')
    const [confirmButton,setConfirmButton] = useState('')
    const [detail,setDetail] = useState('')
    const [heading,setHeading] = useState('')
    const [icon,setIcon] = useState('')
    const [roleChange,{isSuccess}] = useRoleChangeMutation()
    const navigate = useNavigate()
    const {user} = useSelector((state)=>state.auth)
    

    const executeAction =()=>{
        if(user){
            roleChange({role:'seller'})
            isSuccess(navigate('/'))
        }
        else{
            navigate('/login')
        }
        
    }

    const handleConfirm = ()=>{
        if(user){
            setOpen(true)
            if(checkBoxOne && checkBoxTwo){
                setConfirmButton('Confirm');
                setDetail('Are you sure to be Seller on Dokan');
                setHeading('Role Change')
                setIcon('confirm')
            }
            else{  
                setConfirmButton('Ok');
                setDetail('You have to agree with all terms, condition and privacy policy');
                setHeading('Allert!') 
            }
        }else{
            setOpen(true);
            setConfirmButton("Login");
            setHeading('YOU HAVE LOGIN FIRST')
            setDetail('For your seller account you have to login')
            setIcon('info')
        }
    }

    
    return(
        <div className="p-5">
            <div className="bg-white p-5 rounded-sm">
                <div>
                    <h3 className="text-orange-600 font-bold text-3xl">Lorem, ipsum dolor sit amet consectetur?</h3>
                    <p className="text-gray-600 p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sunt iure repellendus omnis porro corrupti quisquam libero placeat itaque qui nulla facilis maiores iusto tempora sequi quaerat nihil sint fuga, corporis dignissimos voluptatem animi. Consequuntur, voluptatibus quos nam architecto beatae dolorum iure? Corrupti laborum eligendi sint deserunt nisi, dicta labore.</p>
                </div>
                <div>
                    <h3 className="text-orange-600 font-bold text-xl">Benifit to be a seller on Dokan</h3>
                    <ul>
                        {/* li*7.px-3.py-2.text-gray-600>lorem15 */}
                        <li className="px-3 py-2 text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam error, deleniti nihil iusto perspiciatis numquam.</li>
                        <li className="px-3 py-2 text-gray-600">Amet architecto debitis consequuntur repellendus vero ipsa, a, necessitatibus deleniti qui voluptates doloribus quibusdam. Consectetur.</li>
                        <li className="px-3 py-2 text-gray-600">Impedit quo veritatis, quisquam provident officia nobis dolores incidunt eius laudantium dolor illum magnam alias.</li>
                        <li className="px-3 py-2 text-gray-600">Eaque odit, maiores qui nesciunt totam officia, hic eveniet obcaecati saepe unde ex ab repellat.</li>
                        <li className="px-3 py-2 text-gray-600">Tenetur maiores officiis accusantium blanditiis animi sequi laudantium, explicabo perferendis odit facere nisi qui aliquid.</li>
                        <li className="px-3 py-2 text-gray-600">Tempora saepe consequuntur cum et obcaecati iure ullam atque beatae, quisquam illum eaque possimus velit?</li>
                        <li className="px-3 py-2 text-gray-600">Id culpa exercitationem quia adipisci quae nostrum voluptate, cum eligendi mollitia hic, ipsam unde tempore.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-orange-600 font-bold text-xl">Terms and Conditions</h3>
                    <p className="text-gray-600 px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, non molestias. Voluptas quibusdam ut incidunt molestias eos mollitia libero? Illo culpa possimus ipsa quibusdam ratione deserunt unde quo nostrum numquam, delectus magnam omnis a natus laudantium labore tenetur provident consequatur?</p>
                </div>
            </div>
            <div className="bg-white p-5 my-3 rounded-sm">
                <div>
                    <div className="flex items-center py-1">
                        <input onClick={(e)=> setCheckBoxOne(e.target.checked)} type="checkbox" name="" id="" className="focus:bg-orange-600 active:text-orange-600 text-orange-600 focus:ring-0" />
                        <span className="text-gray-600 pl-4">Agree with all term and conditions</span>
                    </div>
                    <div className=" flex items-center py-1">
                        <input onClick={(e)=> setCheckBoxTwo(e.target.checked)} type="checkbox" name="" id="" className="focus:bg-orange-600 active:text-orange-600 text-orange-600 focus:ring-0" />
                        <span className="text-gray-600 pl-4">Agree with privacy policy</span>
                    </div>
                </div>
                <div>
                    <Button onClick={handleConfirm} bgColor={"orange"} textColor={"white"} name="Confirm" textCase="uppercase"/>
                </div>
            </div>
            <ModalAlart
                confirmButton={confirmButton}
                details={detail}
                heading={heading}
                executeAction={executeAction}
                open={open}
                setOpen={setOpen}
                icon={icon}
            />
        </div>
    )
}